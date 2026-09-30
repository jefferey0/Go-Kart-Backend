import type { UserRole } from "../../generated/prisma/enums.ts";
import prisma from "../lib/prisma.ts";
import { userRepository } from "../repository/UserRepository.ts";
import {generateAccessToken,generateRefreshToken, verifyAccessToken, verifyRefreshToken } from "../utils/jwt.utils.ts";
import { AppError } from "../utils/Response/http-error.ts";
import bcrypt from "bcrypt";
import { randomUUID } from "node:crypto";
import jwt from "jsonwebtoken";
import type { UserUpdateInput } from "../../generated/prisma/models.ts";

async function hashToken(token: string): Promise<string> {
      return bcrypt.hash(token, 10);
}

const publicUser = (user: any) => {
      if (!user) return user;
      const { passwordHash, ...safeUser } = user;
      return safeUser;
};

export const authService = {
      async registerUser(data: {
            firstName: string;
            lastName: string;
            email: string;
            phone: string;
            password: string;
      }) {
            if (!data.firstName?.trim() || !data.lastName?.trim() || !data.email?.trim() || !data.phone?.trim()) {
                  throw new AppError(400, "All registration fields are required", "INVALID_REGISTRATION");
            }
            if (typeof data.password !== "string" || data.password.length < 8) {
                  throw new AppError(400, "Password must be at least 8 characters", "WEAK_PASSWORD");
            }
            const email = data.email.toLowerCase().trim();
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                  throw new AppError(400, "A valid email address is required", "INVALID_EMAIL");
            }

            const existingUser = await userRepository.getUserByEmail(email);

            if (existingUser) {
                  throw new AppError(
                        400,
                        "Email already exists",
                        "EMAIL_EXISTS",
                  );
            }

            const passwordHash = await hashToken(data.password);

            const newUser = await userRepository.createUser({
                  firstName: data.firstName,
                  lastName: data.lastName,
                  email,
                  phone: data.phone,
                  passwordHash,
                  role: "USER",
            });

            return newUser;
      },

      async login(email: string, password: string) {
            const user = await userRepository.getUserByEmail(email);

            if (!user) {
                  throw new AppError(401, "Invalid credentials", "INVALID_CREDENTIALS");
            }

            const isPasswordValid = await bcrypt.compare(password, user.passwordHash);

            if (!isPasswordValid) {
                  throw new AppError(401, "Invalid credentials", "INVALID_CREDENTIALS");
            }

            const token = await this.issueTokens({
                  userId: user.id,
                  role: user.role,
                  email: user.email,
            })

            return {
                  user: publicUser(user),
                  token
            }
      },

      async issueTokens(payload: {
            userId: string;
            role: UserRole;
            email: string;
      }) {
            const jti = randomUUID();

            const accessToken = generateAccessToken({
                  userId: payload.userId,
                  role: payload.role,
                  email: payload.email,
            });

            const refreshToken = generateRefreshToken({
                  userId: payload.userId,
                  role: payload.role,
                  email: payload.email,
                  jti,
            });

            const tokenHash = await hashToken(refreshToken);

            await prisma.refreshToken.create({
                  data: {
                        id: jti,
                        userId: payload.userId,
                        tokenHash,
                        expiresAt: new Date(
                              Date.now() + 30 * 24 * 60 * 60 * 1000,
                        ),
                  },
            });

            return {
                  accessToken,
                  refreshToken,
            };
      },


      async refresh(token: string) {

            const verifyToken = await verifyRefreshToken(token);

            if(!verifyToken) {
                  throw new AppError(401, "Invalid refresh token", "INVALID_TOKEN");
            }

            const user = await prisma.user.findUnique({
                  where: {
                        id: verifyToken.userId,
                  },
            });

            if (!user) {
                  throw new AppError(401, "Invalid refresh token", "INVALID_TOKEN");
            }

            const payload = verifyToken as jwt.JwtPayload;

            if (!payload.jti) {
                  throw new AppError(401, "Invalid refresh token", "INVALID_TOKEN");
            }

            const stored = await prisma.refreshToken.findUnique({
                  where: { id: payload.jti },
            });
            if (!stored || stored.revokedAt || stored.expiresAt <= new Date()) {
                  throw new AppError(401, "Invalid refresh token", "INVALID_TOKEN");
            }
            const matches = await bcrypt.compare(token, stored.tokenHash);
            if (!matches) {
                  throw new AppError(401, "Invalid refresh token", "INVALID_TOKEN");
            }

            await prisma.refreshToken.update({
                  where: { id: stored.id },
                  data: { revokedAt: new Date() },
            });

            const newTokens = await this.issueTokens({
                  userId: user.id,
                  role: user.role,
                  email: user.email,
            });
            return newTokens;
      },

     async logout(token: string) {
            let payload: jwt.JwtPayload;

            try {
                  payload = jwt.verify(
                        token,
                        process.env.JWT_REFRESH_SECRET!,
                  ) as jwt.JwtPayload;
            } catch {
                  throw new AppError(
                        401,
                        "Invalid refresh token",
                        "INVALID_TOKEN",
                  );
            }

            if (!payload.jti) {
                  throw new AppError(
                        401,
                        "Invalid refresh token",
                        "INVALID_TOKEN",
                  );
            }

            const refreshToken = await prisma.refreshToken.findUnique({
                  where: {
                        id: payload.jti,
                  },
            });

            if (!refreshToken) {
                  throw new AppError(
                        401,
                        "Refresh token not found",
                        "TOKEN_NOT_FOUND",
                  );
            }

            if (refreshToken.revokedAt || refreshToken.expiresAt <= new Date()) {
                  return;
            }

            const matches = await bcrypt.compare(token, refreshToken.tokenHash);
            if (!matches) {
                  throw new AppError(401, "Invalid refresh token", "INVALID_TOKEN");
            }

            await prisma.refreshToken.update({
                  where: {
                        id: payload.jti,
                  },
                  data: {
                        revokedAt: new Date(),
                  },
            });
            
      },


      async me(id: string ) {
          
            const user = await userRepository.getUserById(id);
            if (!user) {
                  throw new AppError(404, "User not found", "USER_NOT_FOUND");
            }
            return publicUser(user);
      },

      async updateMe(id: string, data: UserUpdateInput) {
            const user = await userRepository.getUserById(id);
            if (!user) {
                  throw new AppError(404, "User not found", "USER_NOT_FOUND");
            }

            const input = (data ?? {}) as Record<string, unknown>;
            const allowed = new Set(["firstName", "lastName", "phone"]);
            const unknown = Object.keys(input).find((key) => !allowed.has(key));
            if (unknown) {
                  throw new AppError(400, `Field ${unknown} cannot be changed here`, "FIELD_NOT_ALLOWED");
            }

            const patch: Record<string, string> = {};
            for (const key of ["firstName", "lastName", "phone"]) {
                  if (key in input) {
                        if (typeof input[key] !== "string" || input[key].trim().length > 100) {
                              throw new AppError(400, `${key} is invalid`, "INVALID_PROFILE_FIELD");
                        }
                        patch[key] = input[key].trim();
                  }
            }

            const updateUser = await userRepository.updateUser(id, patch as any);
            return publicUser(updateUser);
      },

      async deleteMe(id: string) {
            const user = await userRepository.getUserById(id);
            if (!user) {
                  throw new AppError(404, "User not found", "USER_NOT_FOUND");
            }

            await userRepository.deleteUser(id);
      },

      async deleteUserById(id: string, adminId: string) {
            const adminUser = await userRepository.getUserById(adminId);
            if (!adminUser || adminUser.role !== "ADMIN") {
                  throw new AppError(403, "Only admins can delete users", "FORBIDDEN");
            }

            const user = await userRepository.getUserById(id);
            if (!user) {
                  throw new AppError(404, "User not found", "USER_NOT_FOUND");
            }

            await userRepository.deleteUser(id);
      }


};
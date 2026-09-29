import prisma from "../lib/prisma.js";
import { userRepository } from "../repository/UserRepository.js";
import { generateAccessToken, generateRefreshToken, verifyAccessToken, verifyRefreshToken } from "../utils/jwt.utils.js";
import { AppError } from "../utils/Response/http-error.js";
import bcrypt from "bcrypt";
import { randomUUID } from "node:crypto";
import jwt from "jsonwebtoken";
async function hashToken(token) {
    return bcrypt.hash(token, 10);
}
const publicUser = (user) => {
    if (!user)
        return user;
    const { passwordHash, ...safeUser } = user;
    return safeUser;
};
export const authService = {
    async registerUser(data) {
        if (!data.firstName?.trim() || !data.lastName?.trim() || !data.email?.trim() || !data.phone?.trim()) {
            throw new AppError(400, "All registration fields are required", "INVALID_REGISTRATION");
        }
        if (typeof data.password !== "string" || data.password.length < 12) {
            throw new AppError(400, "Password must be at least 12 characters", "WEAK_PASSWORD");
        }
        const email = data.email.toLowerCase().trim();
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            throw new AppError(400, "A valid email address is required", "INVALID_EMAIL");
        }
        const existingUser = await userRepository.getUserByEmail(email);
        if (existingUser) {
            throw new AppError(400, "Email already exists", "EMAIL_EXISTS");
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
    async login(email, password) {
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
        });
        return {
            user: publicUser(user),
            token
        };
    },
    async issueTokens(payload) {
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
                expiresAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
            },
        });
        return {
            accessToken,
            refreshToken,
        };
    },
    async refresh(token) {
        const verifyToken = await verifyRefreshToken(token);
        if (!verifyToken) {
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
        const payload = verifyToken;
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
    async logout(token) {
        let payload;
        try {
            payload = jwt.verify(token, process.env.JWT_REFRESH_SECRET);
        }
        catch {
            throw new AppError(401, "Invalid refresh token", "INVALID_TOKEN");
        }
        if (!payload.jti) {
            throw new AppError(401, "Invalid refresh token", "INVALID_TOKEN");
        }
        const refreshToken = await prisma.refreshToken.findUnique({
            where: {
                id: payload.jti,
            },
        });
        if (!refreshToken) {
            throw new AppError(401, "Refresh token not found", "TOKEN_NOT_FOUND");
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
    async me(id) {
        const user = await userRepository.getUserById(id);
        if (!user) {
            throw new AppError(404, "User not found", "USER_NOT_FOUND");
        }
        return publicUser(user);
    },
    async updateMe(id, data) {
        const user = await userRepository.getUserById(id);
        if (!user) {
            throw new AppError(404, "User not found", "USER_NOT_FOUND");
        }
        const input = (data ?? {});
        const allowed = new Set(["firstName", "lastName", "phone"]);
        const unknown = Object.keys(input).find((key) => !allowed.has(key));
        if (unknown) {
            throw new AppError(400, `Field ${unknown} cannot be changed here`, "FIELD_NOT_ALLOWED");
        }
        const patch = {};
        for (const key of ["firstName", "lastName", "phone"]) {
            if (key in input) {
                if (typeof input[key] !== "string" || input[key].trim().length > 100) {
                    throw new AppError(400, `${key} is invalid`, "INVALID_PROFILE_FIELD");
                }
                patch[key] = input[key].trim();
            }
        }
        const updateUser = await userRepository.updateUser(id, patch);
        return publicUser(updateUser);
    }
};
//# sourceMappingURL=auth.service.js.map
import prisma from "../lib/prisma.ts";
import { Prisma } from "../../generated/prisma/client.ts";

export const userRepository = {
    async createUser(data: Prisma.UserCreateInput) {
        return prisma.user.create({
            data
        });
    },

    async getUserByEmail(email: string) {
        return prisma.user.findUnique({
            where: {
                email: email.toLowerCase(),
            },
        });
    },
    

    async getAll() {
        return await prisma.user.findMany({
            omit: {
                passwordHash: true
            }
        });
    },

    async getUserById(id: string) {
        return await prisma.user.findUnique({
            where: {
                id
            }
        });
    },

    async updateUser(id: string, data: Prisma.UserUpdateInput) {
        return await prisma.user.update({
            where: {
                id
            },
            data
        });
    },

    async deleteUser(id: string) {
        return await prisma.user.delete({
            where: {
                id
            }
        });
    }
};
import prisma from "../lib/prisma.js";
import { Prisma } from "../../generated/prisma/client.js";
export const userRepository = {
    async createUser(data) {
        return prisma.user.create({
            data
        });
    },
    async getUserByEmail(email) {
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
    async getUserById(id) {
        return await prisma.user.findUnique({
            where: {
                id
            }
        });
    },
    async updateUser(id, data) {
        return await prisma.user.update({
            where: {
                id
            },
            data
        });
    },
    async deleteUser(id) {
        return await prisma.user.delete({
            where: {
                id
            }
        });
    }
};
//# sourceMappingURL=UserRepository.js.map
import { Prisma } from "../../generated/prisma/client.ts";
export declare const userRepository: {
    createUser(data: Prisma.UserCreateInput): Promise<{
        id: string;
        firstName: string;
        lastName: string;
        email: string;
        phone: string | null;
        passwordHash: string;
        role: import("../../generated/prisma/enums.ts").UserRole;
        isEmailVerified: boolean;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
    }>;
    getUserByEmail(email: string): Promise<{
        id: string;
        firstName: string;
        lastName: string;
        email: string;
        phone: string | null;
        passwordHash: string;
        role: import("../../generated/prisma/enums.ts").UserRole;
        isEmailVerified: boolean;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
    } | null>;
    getAll(): Promise<{
        id: string;
        firstName: string;
        lastName: string;
        email: string;
        phone: string | null;
        role: import("../../generated/prisma/enums.ts").UserRole;
        isEmailVerified: boolean;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    getUserById(id: string): Promise<{
        id: string;
        firstName: string;
        lastName: string;
        email: string;
        phone: string | null;
        passwordHash: string;
        role: import("../../generated/prisma/enums.ts").UserRole;
        isEmailVerified: boolean;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
    } | null>;
    updateUser(id: string, data: Prisma.UserUpdateInput): Promise<{
        id: string;
        firstName: string;
        lastName: string;
        email: string;
        phone: string | null;
        passwordHash: string;
        role: import("../../generated/prisma/enums.ts").UserRole;
        isEmailVerified: boolean;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
    }>;
    deleteUser(id: string): Promise<{
        id: string;
        firstName: string;
        lastName: string;
        email: string;
        phone: string | null;
        passwordHash: string;
        role: import("../../generated/prisma/enums.ts").UserRole;
        isEmailVerified: boolean;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
    }>;
};
//# sourceMappingURL=UserRepository.d.ts.map
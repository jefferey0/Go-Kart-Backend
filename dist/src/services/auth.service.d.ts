import type { UserRole } from "../../generated/prisma/enums.ts";
import type { UserUpdateInput } from "../../generated/prisma/models.ts";
export declare const authService: {
    registerUser(data: {
        firstName: string;
        lastName: string;
        email: string;
        phone: string;
        password: string;
    }): Promise<{
        id: string;
        firstName: string;
        lastName: string;
        email: string;
        phone: string | null;
        passwordHash: string;
        role: UserRole;
        isEmailVerified: boolean;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
    }>;
    login(email: string, password: string): Promise<{
        user: any;
        token: {
            accessToken: string;
            refreshToken: string;
        };
    }>;
    issueTokens(payload: {
        userId: string;
        role: UserRole;
        email: string;
    }): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
    refresh(token: string): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
    logout(token: string): Promise<void>;
    me(id: string): Promise<any>;
    updateMe(id: string, data: UserUpdateInput): Promise<any>;
};
//# sourceMappingURL=auth.service.d.ts.map
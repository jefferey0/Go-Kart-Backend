import { authService } from "../services/auth.service.js";
import logger from "../logger.js";
const authController = {
    async register(req, res) {
        try {
            const { firstName, lastName, email, phone, password } = req.body;
            const result = await authService.registerUser({
                firstName,
                lastName,
                email,
                phone,
                password,
            });
            return res.status(201).json({
                error: false,
                status: 201,
                message: "Registration successful",
                data: result,
            });
        }
        catch (error) {
            logger.error(error);
            return res.status(500).json({
                error: true,
                status: 500,
                message: "An error occurred",
            });
        }
    },
    async login(req, res) {
        try {
            const { email, password } = req.body;
            const result = await authService.login(email, password);
            return res.status(200).json({
                error: false,
                status: 200,
                message: "Login successful",
                data: result,
            });
        }
        catch (error) {
            logger.error(error);
            return res.status(500).json({
                error: true,
                status: 500,
                message: "An error occurred",
            });
        }
    },
    async refresh(req, res) {
        try {
            const { refreshToken } = req.body;
            const result = await authService.refresh(refreshToken);
            return res.status(200).json({
                error: false,
                status: 200,
                message: "Token refreshed",
                data: result,
            });
        }
        catch (error) {
            logger.error(error);
            return res.status(500).json({
                error: true,
                status: 500,
                message: "An error occurred",
            });
        }
    },
    async logout(req, res) {
        try {
            const { refreshToken } = req.body;
            if (!refreshToken) {
                return res.status(400).json({
                    error: true,
                    status: 400,
                    message: "Refresh token is required",
                });
            }
            await authService.logout(refreshToken);
            return res.status(200).json({
                error: false,
                status: 200,
                message: "Logout successful",
            });
        }
        catch (error) {
            logger.error(error);
            return res.status(500).json({
                error: true,
                status: 500,
                message: "An error occurred",
            });
        }
    },
    async me(req, res) {
        try {
            const id = req.user?.userId;
            const result = await authService.me(id);
            return res.status(200).json({
                error: false,
                status: 200,
                message: "Authenticated user",
                data: result,
            });
        }
        catch (error) {
            logger.error(error);
            return res.status(500).json({
                error: true,
                status: 500,
                message: "An error occurred",
            });
        }
    },
    async updateUser(req, res) {
        try {
            const id = req.user?.userId;
            const data = req.body;
            const result = await authService.updateMe(id, data);
            return res.status(200).json({
                error: false,
                status: 200,
                message: "User updated successfully",
                data: result,
            });
        }
        catch (error) {
            logger.error(error);
            return res.status(500).json({
                error: true,
                status: 500,
                message: "An error occurred",
            });
        }
    }
};
export default authController;
//# sourceMappingURL=auth.controller.js.map
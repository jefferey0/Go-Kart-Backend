import express from "express";
import authController from "../controllers/auth.controller.ts";
import { protectedAction, authorize } from "../middlewares/protected.middleware.ts";
import { rateLimit } from "../middlewares/security.ts";


const router = express.Router();

router.post('/register', rateLimit(15 * 60_000, 5, 'register'), authController.register);

router.post('/login', rateLimit(15 * 60_000, 10, 'login'), authController.login);

router.post('/refresh-token', rateLimit(15 * 60_000, 30, 'refresh'), authController.refresh);

router.post('/logout', authController.logout);

router.get('/me', protectedAction, authController.me)

router.patch('/me', protectedAction, authController.updateUser)

router.delete('/me', protectedAction, authController.deleteUser)

router.delete('/users/:id', protectedAction, authorize('ADMIN'), authController.deleteUserById)






const authRoute = router;
export default authRoute
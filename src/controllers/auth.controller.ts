import type { Request, Response } from "express";
import { authService } from "../services/auth.service.ts";
import logger from "../logger.ts";
import { AppError } from "../utils/Response/http-error.ts";




const authController = { 
      async register(req: Request, res: Response) {
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
                  

            } catch (error) {
                  logger.error(error);

                  
                  if (error instanceof AppError) {
                        return res.status(error.statusCode).json({
                              error: true,
                              status: error.statusCode,
                              message: error.message,
                              code: error.code,
                        });
                  }
                  return res.status(500).json({
                        error: true,
                        status: 500,
                        message: "An error occurred",
                  });
            }
      },

      async login(req: Request, res: Response) {
            try {
                  const { email, password } = req.body;

                  const result = await authService.login(email, password);

                  return res.status(200).json({
                        error: false,
                        status: 200,
                        message: "Login successful",
                        data: result,
                  });
                  
            } catch (error) {
                  logger.error(error);

                  if (error instanceof AppError) {
                        return res.status(error.statusCode).json({
                              error: true,
                              status: error.statusCode,
                              message: error.message,
                              code: error.code,
                        });
                  }

                  return res.status(500).json({
                        error: true,
                        status: 500,
                        message: "An error occurred",
                  })
            }
      },

      async refresh(req: Request, res: Response) {
            try {
                  const { refreshToken } = req.body;

                  const result = await authService.refresh(refreshToken);

                  return res.status(200).json({
                        error: false,
                        status: 200,
                        message: "Token refreshed",
                        data: result,
                  });
            } catch (error) {
                  logger.error(error);

                  if (error instanceof AppError) {
                        return res.status(error.statusCode).json({
                              error: true,
                              status: error.statusCode,
                              message: error.message,
                              code: error.code,
                        });
                  }

                  return res.status(500).json({
                        error: true,
                        status: 500,
                        message: "An error occurred",
                  })
            }
      },

      async logout(req: Request, res: Response) {
            try {

                  const { refreshToken } = req.body;

                  if(!refreshToken) {
                        return res.status(400).json({
                              error: true,
                              status: 400,
                              message: "Refresh token is required",
                        })
                  }

                  await authService.logout(refreshToken);

                  return res.status(200).json({
                        error: false,
                        status: 200,
                        message: "Logout successful",
                  });
                  
            } catch (error) {
                  logger.error(error);

                  if (error instanceof AppError) {
                        return res.status(error.statusCode).json({
                              error: true,
                              status: error.statusCode,
                              message: error.message,
                              code: error.code,
                        });
                  }

                  return res.status(500).json({
                      error: true,
                      status: 500,
                      message: "An error occurred",
                  })  
            }
      },

      async me(req: Request, res: Response) {
            try {
                  const id = req.user?.userId as string

                  const result = await authService.me(id);

                  return res.status(200).json({
                        error: false,
                        status: 200,
                        message: "Authenticated user",
                        data: result,
                  });
            } catch (error) {
                  logger.error(error);

                  if (error instanceof AppError) {
                        return res.status(error.statusCode).json({
                              error: true,
                              status: error.statusCode,
                              message: error.message,
                              code: error.code,
                        });
                  }


                  return res.status(500).json({
                        error: true,
                        status: 500,
                        message: "An error occurred",
                  })
            }
      },

      
      async updateUser(req: Request, res: Response) {
            try {
                  const id = req.user?.userId as string;
                  const data = req.body;

                  const result = await authService.updateMe(id, data);

                  return res.status(200).json({
                        error: false,
                        status: 200,
                        message: "User updated successfully",
                        data: result,
                  });
            } catch (error) {
                  logger.error(error);

                  if (error instanceof AppError) {
                        return res.status(error.statusCode).json({
                              error: true,
                              status: error.statusCode,
                              message: error.message,
                              code: error.code,
                        });
                  }

                  
                  return res.status(500).json({
                        error: true,
                        status: 500,
                        message: "An error occurred",
                  })
            }
      }

}


export default authController
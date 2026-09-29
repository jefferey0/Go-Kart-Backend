import type { Request, Response } from "express";
import { uploadMultipleImages } from "../utils/uploadMultipleImages.ts";
import { isSupportedImageBuffer } from "../utils/image-security.ts";

export const uploadImageController = {
      async giveawayImageUpload(req: Request, res: Response) {
            try {
                  const files = ((req as any).files || []) as Array<{
                        buffer: Buffer;
                        originalname: string;
                  }>;

                  if (!files.length) {
                        return res.status(400).json({
                              error: true,
                              status: 400,
                              message: "No images uploaded",
                        });
                  }

                  const validFiles = files.filter(
                        (file) => file?.buffer && file?.originalname && isSupportedImageBuffer(file.buffer),
                  );

                  if (!validFiles.length) {
                        return res.status(400).json({
                              error: true,
                              status: 400,
                              message: "No valid images uploaded",
                        });
                  }

                  const imageUrls = await Promise.all(
                        validFiles.map((file) =>
                              uploadMultipleImages(
                                    file.buffer,
                                    file.originalname,
                              ),
                        ),
                  );

                  return res.status(200).json({
                        error: false,
                        status: 200,
                        message: "Images uploaded successfully",
                        data: imageUrls,
                  });
            } catch (error) {
                  console.error(error);

                  return res.status(500).json({
                        error: true,
                        status: 500,
                        message: "An error occurred while uploading images",
                  });
            }
      },
};
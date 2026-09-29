import { uploadMultipleImages } from "../utils/uploadMultipleImages.js";
import { isSupportedImageBuffer } from "../utils/image-security.js";
export const uploadImageController = {
    async giveawayImageUpload(req, res) {
        try {
            const files = (req.files || []);
            if (!files.length) {
                return res.status(400).json({
                    error: true,
                    status: 400,
                    message: "No images uploaded",
                });
            }
            const validFiles = files.filter((file) => file?.buffer && file?.originalname && isSupportedImageBuffer(file.buffer));
            if (!validFiles.length) {
                return res.status(400).json({
                    error: true,
                    status: 400,
                    message: "No valid images uploaded",
                });
            }
            const imageUrls = await Promise.all(validFiles.map((file) => uploadMultipleImages(file.buffer, file.originalname)));
            return res.status(200).json({
                error: false,
                status: 200,
                message: "Images uploaded successfully",
                data: imageUrls,
            });
        }
        catch (error) {
            console.error(error);
            return res.status(500).json({
                error: true,
                status: 500,
                message: "An error occurred while uploading images",
            });
        }
    },
};
//# sourceMappingURL=upload.controller.js.map
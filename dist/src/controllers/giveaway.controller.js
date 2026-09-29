import { giveawayService } from "../services/giveaway.service.js";
// import { sendSuccess } from "../utils/Response/api-response.ts";
// import { AppError } from "../utils/Response/http-error.ts";
// import { paymentService } from "../services/payment.service.ts";
import { AppError } from "../utils/Response/http-error.js";
export const giveawayController = {
    async createGiveaway(req, res) {
        const id = req.user?.userId;
        if (!id) {
            return res.status(401).json({
                error: true,
                status: 401,
                message: "Unauthorized",
            });
        }
        const giveaway = await giveawayService.create(req.body, id);
        return res.status(201).json({
            error: false,
            status: 201,
            message: "Giveaway created successfully",
            data: giveaway,
        });
    },
    async getGiveawayById(req, res) {
        const giveaway = await giveawayService.getGiveawayService(req.params.id);
        return res.status(200).json({
            error: false,
            status: 200,
            message: "Giveaway retrieved successfully",
            data: giveaway,
        });
    },
    async getGiveawayBySlug(req, res) {
        console.log(req.params);
        const giveaway = await giveawayService.getGiveawayBySlug(req.params.slug);
        return res.status(200).json({
            error: false,
            status: 200,
            message: "Giveaway retrieved successfully",
            data: giveaway,
        });
    },
    async getWinner(req, res) {
        const winner = await giveawayService.getWinnerByGiveawayId(req.params.id);
        return res.status(200).json({
            error: false,
            status: 200,
            message: "Giveaway winners retrieved successfully",
            data: winner,
        });
    },
    async getAllGiveaway(req, res) {
        const giveaways = await giveawayService.getAllGiveawaysService(req.query);
        return res.status(200).json({
            error: false,
            status: 200,
            message: "Giveaways retrieved successfully",
            data: giveaways,
        });
    },
    async update(req, res) {
        const { id } = req.params;
        const giveaway = await giveawayService.updateGiveawayService(id, req.body);
        return res.status(200).json({
            error: false,
            status: 200,
            message: "Giveaway updated successfully",
            data: giveaway,
        });
    },
    async deleteGiveaway(req, res) {
        const { id } = req.params;
        const giveaway = await giveawayService.deleteGiveawayService(id);
        return res.status(200).json({
            error: false,
            status: 200,
            message: "Giveaway deleted successfully",
            data: giveaway,
        });
    }
};
//# sourceMappingURL=giveaway.controller.js.map
import { notificationService } from "../services/notification.service.js";
import { sendSuccess } from "../utils/Response/api-response.js";
export async function list(req, res) {
    const r = await notificationService.list(req.user.id, req.query);
    return sendSuccess(res, "Notifications retrieved successfully", r.data, 200, r.pagination);
}
export async function read(req, res) {
    return sendSuccess(res, "Notification marked as read", await notificationService.markRead(req.user.id, req.params.id));
}
export async function readAll(req, res) {
    return sendSuccess(res, "Notifications marked as read", await notificationService.markAllRead(req.user.id));
}
//# sourceMappingURL=notification.controller.js.map
import type { Request, Response } from "express";
import { notificationService } from "../services/notification.service.ts";
import { sendSuccess } from "../utils/Response/api-response.ts";





export async function list(req: Request, res: Response) {
  const r = await notificationService.list(req.user!.id as string, req.query);
  return sendSuccess(
    res,
    "Notifications retrieved successfully",
    r.data,
    200,
    r.pagination,
  );
}
export async function read(req: Request, res: Response) {
  return sendSuccess(
    res,
    "Notification marked as read",
    await notificationService.markRead(req.user!.id as string, req.params.id as string),
  );
}
export async function readAll(req: Request, res: Response) {
  return sendSuccess(
    res,
    "Notifications marked as read",
    await notificationService.markAllRead(req.user!.id as string),
  );
}

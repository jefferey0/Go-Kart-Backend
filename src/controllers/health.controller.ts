import type { Request, Response } from "express";
import prisma from "../lib/prisma.ts";
import { redis } from "../config/redis.ts";





export async function live(_req: Request, res: Response) {
  res.json({ status: "ok" });
}
export async function ready(_req: Request, res: Response) {
  let database = "connected",
    redisStatus = "connected";
  try {
    await prisma.$queryRaw`SELECT 1`;
  } catch {
    database = "disconnected";
  }
  try {
    await redis.ping();
  } catch {
    redisStatus = "disconnected";
  }
  const ok = database === "connected" && redisStatus === "connected";
  res
    .status(ok ? 200 : 503)
    .json({ status: ok ? "ok" : "not_ready", database, redis: redisStatus });
}

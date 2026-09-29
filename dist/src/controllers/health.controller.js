import prisma from "../lib/prisma.js";
import { redis } from "../config/redis.js";
export async function live(_req, res) {
    res.json({ status: "ok" });
}
export async function ready(_req, res) {
    let database = "connected", redisStatus = "connected";
    try {
        await prisma.$queryRaw `SELECT 1`;
    }
    catch {
        database = "disconnected";
    }
    try {
        await redis.ping();
    }
    catch {
        redisStatus = "disconnected";
    }
    const ok = database === "connected" && redisStatus === "connected";
    res
        .status(ok ? 200 : 503)
        .json({ status: ok ? "ok" : "not_ready", database, redis: redisStatus });
}
//# sourceMappingURL=health.controller.js.map
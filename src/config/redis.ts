import IORedis from "ioredis";
import ENV from "./env.config.ts";

export const redis = new IORedis(ENV.redis.url as string, { maxRetriesPerRequest: null });

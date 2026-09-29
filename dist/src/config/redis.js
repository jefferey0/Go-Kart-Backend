import IORedis from "ioredis";
import ENV from "./env.config.js";
export const redis = new IORedis(ENV.redis.url, { maxRetriesPerRequest: null });
//# sourceMappingURL=redis.js.map
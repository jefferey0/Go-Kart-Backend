import { Worker } from "bullmq";
import { redis } from "../config/redis.js";
import logger from "../logger.js";
new Worker("notifications", async (job) => {
    // logger.info({ job: job.name  }, "Notification job processed");
}, { connection: redis, concurrency: 10 });
new Worker("payment-processing", async (job) => {
    // logger.info({ job: job.name }, "Payment job processed");
}, { connection: redis, concurrency: 10 });
logger.info("Go-Kart worker started");
//# sourceMappingURL=index.js.map
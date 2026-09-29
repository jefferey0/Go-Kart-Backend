import { Worker } from "bullmq";
import { redis } from "../config/redis.ts";
import logger from "../logger.ts";



new Worker(
  "notifications",
  async (job) => {
    // logger.info({ job: job.name  }, "Notification job processed");
  },
  { connection: redis, concurrency: 10 },
);
new Worker(
  "payment-processing",
  async (job) => {
    // logger.info({ job: job.name }, "Payment job processed");
  },
  { connection: redis, concurrency: 10 },
);
logger.info("Go-Kart worker started");

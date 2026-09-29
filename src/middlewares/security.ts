import type { Request, Response, NextFunction } from "express";

// Small dependency-free limiter for sensitive endpoints. In production with multiple
// instances, replace this with a Redis-backed limiter.
type Bucket = { count: number; resetAt: number };
const buckets = new Map<string, Bucket>();

export const rateLimit = (windowMs: number, max: number, keyPrefix: string) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const key = `${keyPrefix}:${req.ip ?? req.socket.remoteAddress ?? "unknown"}`;
    const now = Date.now();
    let bucket = buckets.get(key);

    if (!bucket || bucket.resetAt <= now) {
      bucket = { count: 0, resetAt: now + windowMs };
      buckets.set(key, bucket);
    }

    bucket.count += 1;
    res.setHeader("X-RateLimit-Limit", String(max));
    res.setHeader("X-RateLimit-Remaining", String(Math.max(0, max - bucket.count)));
    res.setHeader("X-RateLimit-Reset", String(Math.ceil(bucket.resetAt / 1000)));

    if (bucket.count > max) {
      res.setHeader("Retry-After", String(Math.ceil((bucket.resetAt - now) / 1000)));
      return res.status(429).json({
        error: true,
        status: 429,
        message: "Too many requests. Please try again later.",
        code: "RATE_LIMITED",
      });
    }

    next();
  };
};

export const cleanupRateLimitBuckets = () => {
  const now = Date.now();
  for (const [key, bucket] of buckets) {
    if (bucket.resetAt <= now) buckets.delete(key);
  }
};

setInterval(cleanupRateLimitBuckets, 60_000).unref();

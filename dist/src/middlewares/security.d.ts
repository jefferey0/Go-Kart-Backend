import type { Request, Response, NextFunction } from "express";
export declare const rateLimit: (windowMs: number, max: number, keyPrefix: string) => (req: Request, res: Response, next: NextFunction) => Response<any, Record<string, any>> | undefined;
export declare const cleanupRateLimitBuckets: () => void;
//# sourceMappingURL=security.d.ts.map
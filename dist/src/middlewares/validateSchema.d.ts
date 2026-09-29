import type { ZodSchema } from "zod";
import type { Request, Response, NextFunction } from "express";
export declare const validateSchema: (schema: ZodSchema) => (req: Request, res: Response, next: NextFunction) => Response<any, Record<string, any>> | undefined;
//# sourceMappingURL=validateSchema.d.ts.map
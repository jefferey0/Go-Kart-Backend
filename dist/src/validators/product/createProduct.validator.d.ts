import { z } from "zod";
export declare const createProductSchema: z.ZodObject<{
    name: z.ZodString;
    price: z.ZodCoercedNumber<unknown>;
    quantity: z.ZodCoercedNumber<unknown>;
}, z.core.$strip>;
//# sourceMappingURL=createProduct.validator.d.ts.map
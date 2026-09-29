import { z } from "zod";
export declare const createAddressSchema: z.ZodObject<{
    street: z.ZodString;
    city: z.ZodString;
    state: z.ZodString;
    country: z.ZodString;
}, z.core.$strip>;
export type CreateAddressDto = z.infer<typeof createAddressSchema>;
//# sourceMappingURL=createAddress.validator.d.ts.map
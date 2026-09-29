import type { Request, Response } from "express";
export declare const paymentController: {
    listMethods(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    listAllMethods(_req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    createMethod(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    updateMethod(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    initialize(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    submitProof(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    getStatus(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    listReviewQueue(_req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    reviewPayment(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
};
//# sourceMappingURL=payment.controller.d.ts.map
import type { Request, Response } from "express";
export declare const orderController: {
    createOrder(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    getAll(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    getById(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    getMyOrders(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    updateStatus(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    deleteOrder(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
};
//# sourceMappingURL=order.controller.d.ts.map
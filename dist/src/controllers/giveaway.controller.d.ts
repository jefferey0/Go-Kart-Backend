import type { Request, Response } from "express";
export declare const giveawayController: {
    createGiveaway(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    getGiveawayById(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    getGiveawayBySlug(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    getWinner(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    getAllGiveaway(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    update(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    deleteGiveaway(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
};
//# sourceMappingURL=giveaway.controller.d.ts.map
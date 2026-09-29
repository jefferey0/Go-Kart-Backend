import type { Request, Response } from "express";
export declare const winnerController: {
    getMyWins(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    claim(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    getPublicWinners(_req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
};
//# sourceMappingURL=winner.controller.d.ts.map
import type { Request, Response } from "express";
export declare function dashboard(_req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function getSettings(_req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function updateSettings(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function users(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function orders(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function selectWinners(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function selectWinner(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function updateGiveawayStatus(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function adminUpdateGiveaway(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function adminDeleteGiveaway(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function updateUserStatus(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function participants(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function tickets(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
//# sourceMappingURL=admin.controller.d.ts.map
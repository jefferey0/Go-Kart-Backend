declare const ENV: {
    nodeEnv: string;
    port: number;
    corsOrigins: string | undefined;
    database: {
        url: string | undefined;
        ssl: boolean;
        caPath: string;
    };
    jwt: {
        accessSecret: string | undefined;
        refreshSecret: string | undefined;
        accessExpiresIn: string;
        refreshExpiresIn: string;
    };
    cloudinary: {
        cloudName: string | undefined;
        apiKey: string | undefined;
        apiSecret: string | undefined;
    };
    redis: {
        url: string | undefined;
    };
};
export default ENV;
//# sourceMappingURL=env.config.d.ts.map
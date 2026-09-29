declare const ENV: {
    nodeEnv: string;
    port: number;
    corsOrigins: string;
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
    cors: {
        corsOrigins: string;
    };
};
export default ENV;
//# sourceMappingURL=env.config.d.ts.map
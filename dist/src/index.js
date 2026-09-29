import express, {} from 'express';
// import pool from './config/pgdb.config.ts';
import cors from 'cors';
import helmet from 'helmet';
import routes from "./routes/index.route.js";
import ENV from "./config/env.config.js";
import logger from "./logger.js";
import cookieParser from "cookie-parser";
import { errorHandler } from "./middlewares/error.middleware.js";
import { rateLimit } from "./middlewares/security.js";
import path from "path";
import swaggerUi from "swagger-ui-express";
import YAML from "yamljs";
const app = express();
const port = ENV.port;
app.disable("x-powered-by");
app.set("trust proxy", 1);
app.use(express.json({ limit: "1mb" }));
app.use(express.urlencoded({ extended: true, limit: "1mb" }));
app.use(cookieParser());
// helmet
app.use(helmet({
    // This API does not serve the frontend, so Helmet's default CSP can stay enabled.
    contentSecurityPolicy: true,
    crossOriginResourcePolicy: { policy: "cross-origin" },
}));
// CORS
const allowedOrigins = (ENV.corsOrigins ?? "")
    .split(",")
    .map((origin) => origin.trim())
    .filter(Boolean);
const corsOptions = {
    origin: (origin, callback) => {
        // Allow non-browser/server-to-server requests without an Origin header.
        if (!origin)
            return callback(null, true);
        if (allowedOrigins.includes(origin))
            return callback(null, true);
        return callback(new Error("CORS origin is not allowed"));
    },
    credentials: true,
    methods: ["GET", "POST", "PATCH", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization", "Idempotency-Key"],
    optionSuccessStatus: 204,
};
app.use(cors(corsOptions));
// General abuse protection. Sensitive auth endpoints have tighter limits below.
app.use("/api", rateLimit(60_000, 120, "api"));
app.get('/', (req, res) => {
    res.send('Hello, World!');
});
app.use('/api', routes);
const swaggerPath = path.resolve(process.cwd(), "src", "docs", "swagger.yaml");
const swaggerDocument = YAML.load(swaggerPath);
app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(errorHandler);
app.listen(port, () => {
    logger.info(`Server is running on http://localhost:${port}`);
});
// pool.connect()
// .then(() => {
//     app.listen(port, () => {
//         logger.info(`Server is running on http://localhost:${port}`);
//     });
// }
// ).catch((err: any) => {
//     logger.error('An error occurred:', err);
// })
//# sourceMappingURL=index.js.map
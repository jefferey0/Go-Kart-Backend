import dotenv from "dotenv";

dotenv.config();

const ENV = {
  nodeEnv: process.env.NODE_ENV ?? "development",

  port: Number(process.env.PORT ?? 4000),

  corsOrigins: process.env.CORS_ORIGINS,

  database: {
    url: process.env.DATABASE_URL,

    ssl: process.env.DATABASE_SSL === "true",

    caPath: process.env.CA_CERT_PATH ?? "certs/ca.pem",
  },

  jwt: {
    accessSecret: process.env.JWT_ACCESS_SECRET,
    refreshSecret: process.env.JWT_REFRESH_SECRET,
    accessExpiresIn: process.env.JWT_ACCESS_EXPIRES_IN || "1d",
    refreshExpiresIn: process.env.JWT_REFRESH_EXPIRES_IN || "7d",
  },
  

  cloudinary: {
    cloudName: process.env.CLOUDINARY_NAME,
    apiKey: process.env.CLOUDINARY_KEY,
    apiSecret: process.env.CLOUDINARY_SECRET,
  },

  redis: {
    url: process.env.REDIS_URL,
   //  host: process.env.REDIS_HOST,
   //  port: Number(process.env.REDIS_PORT),
   //  password: process.env.REDIS_PASS,
   //  username: process.env.REDIS_USER,
  },
};

export default ENV;

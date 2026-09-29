export class AppError extends Error {
    statusCode;
    code;
    constructor(statusCode, message, code = "APP_ERROR") {
        super(message);
        this.name = "AppError";
        this.statusCode = statusCode;
        this.code = code;
    }
}
//# sourceMappingURL=http-error.js.map
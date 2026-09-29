export function sendSuccess(res, message, data, statusCode = 200, pagination) {
    return res.status(statusCode).json({ success: true, message, data, ...(pagination ? { pagination } : {}) });
}
//# sourceMappingURL=api-response.js.map
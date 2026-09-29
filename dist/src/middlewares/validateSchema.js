export const validateSchema = (schema) => (req, res, next) => {
    const result = schema.safeParse(req.body);
    if (!result.success) {
        return res.status(400).json({
            status: false,
            errors: result.error.flatten().fieldErrors,
        });
    }
    req.body = result.data;
    next();
};
//# sourceMappingURL=validateSchema.js.map
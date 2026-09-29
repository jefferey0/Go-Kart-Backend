export function getPagination(pageInput, limitInput) {
    const page = Math.max(Number(pageInput) || 1, 1);
    const limit = Math.min(Math.max(Number(limitInput) || 20, 1), 100);
    return { page, limit, skip: (page - 1) * limit };
}
//# sourceMappingURL=pagination.js.map
export const isSupportedImageBuffer = (buffer) => {
    if (!buffer || buffer.length < 12)
        return false;
    // JPEG
    if (buffer[0] === 0xff && buffer[1] === 0xd8 && buffer[2] === 0xff)
        return true;
    // PNG
    if (buffer.subarray(0, 8).equals(Buffer.from([137, 80, 78, 71, 13, 10, 26, 10])))
        return true;
    // GIF
    if (buffer.subarray(0, 6).toString("ascii") === "GIF87a" || buffer.subarray(0, 6).toString("ascii") === "GIF89a")
        return true;
    // WebP (RIFF....WEBP)
    if (buffer.subarray(0, 4).toString("ascii") === "RIFF" && buffer.subarray(8, 12).toString("ascii") === "WEBP")
        return true;
    return false;
};
//# sourceMappingURL=image-security.js.map
const path = require("path");
const fs = require("fs");

/**
 * Checks if the filename has a valid image extension (png, jpg, and jpeg)
 * 
 * @param {string} filename
 * @returns {boolean}
 */
module.exports.isExtensionImage = (filename) => {
    const validExtensions = [
        ".png",
        ".jpg",
        ".jpeg"
    ]
    let ext = path.extname(filename);
    return validExtensions.includes(ext);
}

/**
 * Deletes the file if its exists in the local file system
 * 
 * @param {string} filepath The absolute path to the file
 */
module.exports.deleteIfExists = async (filepath) => {
    if(fs.existsSync(filepath)){
        fs.unlinkSync(filepath);
    }
}
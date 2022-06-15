const multer = require("multer");
const path = require("path");
const FlakeId = require("flake-idgen");
const constants = require("../constants");

const flakeIdGen = new FlakeId();

module.exports = multer.diskStorage({
    destination: constants.UPLOADS_DIRECTORY,
    filename: function(req, file, cb){
        let filename = flakeIdGen.next().toString("hex");
        cb(null, `${filename}${path.extname(file.originalname)}`);
    },
})
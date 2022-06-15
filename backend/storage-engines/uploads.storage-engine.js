const multer = require("multer");
const path = require("path");
const FlakeId = require("flake-idgen");

const flakeIdGen = new FlakeId();

module.exports = multer.diskStorage({
    destination: path.join(__dirname, "..", "uploads"),
    filename: function(req, file, cb){
        let filename = flakeIdGen.next().toString("hex");
        cb(null, `${filename}${path.extname(file.originalname)}`);
    },
})
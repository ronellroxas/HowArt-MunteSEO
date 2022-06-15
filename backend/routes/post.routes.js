const express = require("express");
const path = require("path");
const multer = require("multer");

const uploadsStorageEngine = require("../storage-engines/uploads.storage-engine");
const authMiddlewares = require("../middlewares/auth.middlewares");
const postController = require("../controllers/post.controller");

const upload = multer({ 
    storage: uploadsStorageEngine,
    fileFilter: function(req, file, cb){
        const validExtensions = [
            ".png",
            ".jpg",
            ".jpeg"
        ]
        let ext = path.extname(file.originalname);
        if(!validExtensions.includes(ext)){
            return cb(new Error("Only images may be uploaded"));
        }
        cb(null, true);
    }
});

const router = express.Router();

router.post("/", authMiddlewares.checkAuth, upload.single("image"), postController.createPost);

module.exports = router;
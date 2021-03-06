const express = require("express");
const multer = require("multer");

const fileHelper = require("../helpers/file-helper");
const uploadsStorageEngine = require("../storage-engines/uploads.storage-engine");
const authMiddlewares = require("../middlewares/auth.middlewares");
const postController = require("../controllers/post.controller");

const upload = multer({ 
    storage: uploadsStorageEngine,
    fileFilter: function(req, file, cb){
        if(!fileHelper.isExtensionImage(file.originalname)){
            return cb(new Error("Only images may be uploaded"));
        }
        cb(null, true);
    }
});

const router = express.Router();

router.post("/like", authMiddlewares.checkAuth, postController.likePost);
router.post("/", authMiddlewares.checkAuth, upload.single("image"), postController.createPost);
router.get("/user", authMiddlewares.checkAuth, postController.getPostsByUser);
router.get("/recent", authMiddlewares.checkAuth, postController.getRecentPosts)
router.get("/:postId", authMiddlewares.checkAuth, postController.getPostById);

module.exports = router;
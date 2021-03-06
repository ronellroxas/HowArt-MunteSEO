const express = require("express");
const authMiddlewares = require("../middlewares/auth.middlewares");
const userController = require("../controllers/user.controller");
const multer = require("multer");
const fileHelper = require("../helpers/file-helper");
const uploadsStorageEngine = require("../storage-engines/uploads.storage-engine");

const router = express.Router();

const upload = multer({
    storage: uploadsStorageEngine,
    fileFilter: function(req, file, cb){
        if(!fileHelper.isExtensionImage(file.originalname)){
            return cb(new Error("Only images may be uploaded"));
        }
        cb(null, true);
    }
});

router.post("/login", userController.login);
router.post("/logout", userController.logout);
router.get("/me", authMiddlewares.checkAuth, userController.getLoggedInUser);
router.get("/:userId/statistics", authMiddlewares.checkAuth, userController.getUserStatistics);
router.get("/:userId", authMiddlewares.checkAuth, userController.getUser);
router.patch("/profile-picture", authMiddlewares.checkAuth, upload.single("profilePicture"), userController.updateProfilePicture);
router.post("/follow", authMiddlewares.checkAuth, userController.followUser);
router.post("/", userController.createUser);

module.exports = router;

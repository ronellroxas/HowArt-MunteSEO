const express = require("express");
const router = express.Router();
const authMiddlewares = require("../middlewares/auth.middlewares");
const orderController = require("../controllers/order.controller");
const multer = require("multer");
const fileHelper = require("../helpers/file-helper");
const uploadsStorageEngine = require("../storage-engines/uploads.storage-engine");
const upload = multer({
    storage: uploadsStorageEngine,
    fileFilter: function(req, file, cb){
        if(!fileHelper.isExtensionImage(file.originalname)){
            return cb(new Error("Only images may be uploaded"));
        }
        cb(null, true);
    }
});

//commission form page
router.post("/create-order", authMiddlewares.checkAuth, upload.single("image"), orderController.createOrder);

//my orders page
router.get("/my-orders", authMiddlewares.checkAuth, orderController.myOrders);
router.get("/order-details", orderController.orderDetails);
router.post("/edit-order-contacts", orderController.editOrderContacts);
router.post("/pay-order", orderController.payOrder);

//my jobs page
router.get("/my-jobs", authMiddlewares.checkAuth, orderConteroller.myJobs);
router.post("/edit-job-details", orderController.editJobDetails);
router.post("/update-status", orderController.updateStatus);

module.exports = router;

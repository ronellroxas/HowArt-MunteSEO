const express = require("express");
const router = express.Router();
const authMiddlewares = require("../middlewares/auth.middlewares");
const orderController = require("../controllers/order.controller");

//my orders page
router.get("/my-orders", orderController.myOrders);
router.get("/order-details", orderController.orderDetails);
router.post("/pay-order", orderController.payOrder);
router.post("/create-order", orderController.createOrder);

//my jobs page
router.get("/my-jobs", orderConteroller.myJobs);
router.post("/edit-job-details", orderController.editJobDetails);

module.exports = router;

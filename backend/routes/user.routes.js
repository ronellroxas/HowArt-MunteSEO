const express = require("express");
const authMiddlewares = require("../middlewares/auth.middlewares");
const userController = require("../controllers/user.controller");

const router = express.Router();

router.post("/login", userController.login);
router.get("/me", authMiddlewares.checkAuth, userController.getLoggedInUser);

module.exports = router;

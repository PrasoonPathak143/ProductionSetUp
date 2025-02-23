const express = require('express');
const router = express.Router();
const userController = require("../controllers/user-controller");
const isLoggedin = require("../middlewares/is-loggedin");

router.get("/", isLoggedin, userController.user);

module.exports = router;
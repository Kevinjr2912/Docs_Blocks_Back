const express = require("express");
const router = express.Router();
const usercontroller = require("../controllers/userController.js");

router.post("/user", usercontroller.createUser);
router.post("/login", usercontroller.login);
router.get("/watch-user", usercontroller.getAllUsers);
router.put("/update-user", usercontroller.updateUser);
router.delete("/delete-user/:id", usercontroller.deleteUser);

module.exports = router;

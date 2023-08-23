const { UserRegister, UserLogIn } = require("../controllers/user.controller");

const router = require("express").Router();

// register a User
router.post("/register", UserRegister);
// login a User
router.post("/login", UserLogIn);

module.exports = router;

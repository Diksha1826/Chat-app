const router = require("express");
const { registerUser, loginUser } = require("../controllers/userController");

const userRouter = router();

userRouter.post("/register" , registerUser);
userRouter.post("/login" , loginUser)

module.exports = userRouter ;
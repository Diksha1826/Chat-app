const router = require("express");
const { registerUser, loginUser, setAvatar, getAllUsers } = require("../controllers/userController");

const userRouter = router();

userRouter.post("/register" , registerUser);
userRouter.post("/login" , loginUser);
userRouter.post("/setAvatar/:id" , setAvatar );
userRouter.get("/allUsers/:id" ,  getAllUsers );



module.exports = userRouter ;
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRouter = require("./routes/userRoutes");


const app = express();
//learn this
require("dotenv").config();

app.use(cors());
app.use(express.json());

app.use("/api/auth" , userRouter);

mongoose.connect(process.env.MONGO_URL ,{
    useNewUrlParser: true ,
    useUnifiedTopology: true,
}).then(()=>{
    console.log("Db connected successfully");
}).catch((err)=>{
    console.log(err.message);
})

const server = app.listen(process.env.PORT , ()=>{
    console.log(`Server Started on Port ${process.env.PORT}`)
})
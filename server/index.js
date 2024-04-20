const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRouter = require("./routes/userRoutes");
const messageRouter = require("./routes/messagesRoutes");
const socket = require("socket.io");


const app = express();
//learn this
require("dotenv").config();

app.use(cors());
app.use(express.json());

app.use("/api/auth" , userRouter);
app.use("/api/messages" , messageRouter);

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

const io = socket(server , {
    cors:{
        origin:"https://chat-app-1-k77f.onrender.com",
        Credentials: true ,
    },
});

global.onlineUsers = new Map();

io.on("connection" , (socket)=>{
    global.chatSocket = socket;
    socket.on("add-user" , (userId)=>{
        onlineUsers.set(userId , socket.id);
    });

    socket.on("send-msg" , (data)=>{
        const sendUserSocket = onlineUsers.get(data.to);
        if(sendUserSocket){
            socket.to(sendUserSocket).emit("msg-recieve" , data.message);
        }
    });
});
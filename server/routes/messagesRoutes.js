const { addMessage, getAllMessage } = require("../controllers/messagesController");

const messageRouter = require("express").Router();

messageRouter.post("/addmsg" , addMessage);
messageRouter.post("/getmsg" , getAllMessage);
// http://localhost:5000/api/messages/getmsg
module.exports = messageRouter


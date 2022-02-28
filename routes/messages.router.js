const express =require('express');

const messagescontroller=require('../controllers/messages.controller')

//creating messages router through express
const messagesrouter=express.Router();

// '/GET messages'route
messagesrouter.get('/',messagescontroller.getmessages)
// '/POST messages'route
messagesrouter.post('/',messagescontroller.postmessages)


module.exports=messagesrouter;

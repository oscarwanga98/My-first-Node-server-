const express =require('express');


const friendscontroller =require('../controllers/friends.controller');

//creating friends router through express
const friendsrouter=express.Router();
// middle ware
friendsrouter.use((req,res,next)=>{
    console.log('ip address',req.ip);
    next();
})

// This are my route handlers  or end points.
// 'POST friends' route 
friendsrouter.post('/',friendscontroller.postfriend)
// '/GET friends'route
friendsrouter.get('/',friendscontroller.getfriends)
// '/friends/'route
friendsrouter.get('/:friendId',friendscontroller.getfriend)

module.exports=friendsrouter;
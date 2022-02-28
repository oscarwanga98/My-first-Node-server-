const model=require('../models/friends.models')

//POST friends route error 
function postfriend (req,res){
    if(!req.body.name){
            res.status(400).json({
            error:'missing frind name'
        });
    }
    const newfriend ={
        name:req.body.name,
        id:model.length
    }
    model.push(newfriend);
    res.json(newfriend);
}

//GET friends route 
function getfriends (req, res)  {

  res.json(model);
}
// / '/GET friends/'route
function getfriend(req,res){
    const friendId=Number(req.params.friendId);
    const friend =model[friendId];
    if(friend) {
        res.status(200).json(friend);
    }
    else{
        res.status(404).json({
            error:"Friend does not exist"
        })
    }
}
module.exports={
    postfriend,
    getfriend,
    getfriends
}
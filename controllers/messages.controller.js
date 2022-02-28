const path =require('path')


//get messages function
function getmessages(req,res){

    //path.join(__dirname,'..','public','skimountain.jpg')
    //ths fuction allows the get message fuction to send back an image stored on the server 
    //res.sendFile(path.join(__dirname,'..','public','images','skimountain.jpg'));
    
    res.render('messages.hbs',{
        title:'messgaes to my friend',
        friends:'Elon ule msee',
    })

    //res.send('<ul><li>Hello this is the message route </li></ul>')
}

//post messages function 
function postmessages (req,res){

    res.send('<ul><li>Updating messages on the server..... </li></ul>')
}

module.exports={
    getmessages,
    postmessages,
}
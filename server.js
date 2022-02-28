const express = require ('express');
const path =require ('path');


const friendsrouter=require('./routes/friends.router')
const messagesrouter=require('./routes/messages.router')

const app = express();

app.set ('view engine ','hbs')
app.set('views',path.join(__dirname,'views'));

const req = require('express/lib/request');
const res = require('express/lib/response');



const PORT = 3000;

//middleware 

//logging the  METHOD of all  request and time taken
app.use(function (req, res, next) {
        const start=Date.now();
        console.log(`${req.method} on ${req.url}`);
        next();
        const delta =Date.now()-start;
        console.log(`${req.method} on ${req.url} ${delta}ms`);
    }
);
//to parser the request body to json
app.use (express.json())

//creting a expresss static file middleware to help serv up pages and data 
app.use('/site',express.static(path.join(__dirname,'public')))



app.get('/',(req,res)=>{
res.render('index.hbs',{
    title:'my friends are very clever',
    caption:'let\'s go skeeing',
})

})
//mounting friends router 
app.use('/friends',friendsrouter);
//mounting messages router
app.use('/messages',messagesrouter);


// server starting and listening 
app.listen(PORT, ()=>{
    console.log(`Server is on and listening on PORT: ${PORT}......`)
})


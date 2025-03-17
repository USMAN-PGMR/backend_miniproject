
const express = require('express')
const app = express();
const path =require('path');

// ----middle ware ------parser/cookie 
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.set('view engine','ejs')   //Ejs



// ********routes******
app.get("/",function(req,res){
    res.send('working fine ')
})


// set port
app.listen(8000,function(){
    console.log('its running')
})
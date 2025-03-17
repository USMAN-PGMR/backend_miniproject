
const express = require('express')
const app = express();
const path =require('path');

// ----middle ware ------parser/cookie 
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.set('view engine','ejs')   //Ejs
//set public static files 
app.use(express.static(path.join(__dirname,'public')))   // __direname overall path data ha system sy ap k folder tak
// console.log(__dirname)



// ********routes******
// app.get("/",function(req,res){
//     res.send('working fine ')
// })
// oper normal routes thy jo brower pr show hoty thy lkn ab ejs waly routes 
// set ejs 
app.get("/",function(req,res){
    res.render('index')     // is me ham render karain gy or views folder k pages ko use karain gy 
})


// set port
app.listen(8000,function(){
    console.log('its running')
})

const express = require('express')
const app = express();
const path =require('path');
const fs=require('fs');

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
// -----------set ejs 
app.get("/",function(req,res){
    fs.readdir('./files',function(err,files){
        // res.render('index')     // is me ham render karain gy or views folder k pages ko use karain gy 
        res.render('index',{files:files})      

    })
})
// post methos 
app.post("/create", function (req, res) {
    fs.writeFile(`./files/${req.body.title.split(' ').join('')}.txt`, req.body.description, function (err) {
        if (err) {
            console.error("Error saving the file:", err);
            return res.status(500).send("Error saving the file");
        }
        console.log("File saved successfully");
        res.redirect("/");
    });
});
// *********dynamic routes *********
app.get("/profile/:username",function(req,res){
    //(req.params.username) // ya params dynamically part k data ko dakhy ga 
    res.send(`Welcome, ${req.params.username}`)      
})
app.get("/auther/:username/:age",function(req,res){ 
    res.send(`Welcome, ${req.params.username} of age ${req.params.age} `)      
})


// set port
app.listen(8000,function(){
    console.log('its running')
})
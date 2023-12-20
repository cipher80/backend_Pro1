// console.log("I am Starting node js 1st project");
require('dotenv').config;
const express = require('express');
const app = express();
app.get('/',(req,res)=>{
    res.send("Hello I am creating first project of node js");
})

app.get('/twitter',(req,res)=>{
    res.send("Please visit mine twitter for mine blogs");
})

app.get('/login',(req,res)=>{
res.send("Please Log in ")
})

app.get('/youtube',(req,res)=>{
    res.send("<h2>Mai aur Backend</h2>")
})

app.listen(process.env.PORT,()=>{
    console.log(`App Listening at `)
});


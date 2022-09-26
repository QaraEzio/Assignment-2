const express = require('express');
const app=express()

app.get ("",(req,res)=>{
    res.sendFile(__dirname + '/server/home.html');
})
app.get("/bagan",(req,res)=>{
    res.sendFile(__dirname + '/server/b.html');
})
app.get("/putao",(req,res)=>{
    res.sendFile(__dirname + '/server/p.html');
})
app.get("/inlelake",(req,res)=>{
    res.sendFile(__dirname + '/server/i.html');
})
app.get("/ngapali",(req,res)=>{
    res.sendFile(__dirname + '/server/n.html');
})

 
app.listen(3000,()=>{
    console.log(
    'server starting up at: port:3000:');
})
const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname,'./public')));
app.use(express.urlencoded({extended: false}));




app.listen(process.env.PORT || 3000, ()=>{
    console.log("correndo en el servidor 3000")
})

app.get("/", (req,res)=>{
    res.sendFile(path.resolve(__dirname, './src/views/home.html'))

});

app.get("/register", (req,res)=>{
    res.sendFile(path.resolve(__dirname, './src/views/register.html'))

});

app.post("/register", (req,res)=>{
    res.redirect("/");
})

app.get("/ingreso", (req,res)=>{
    res.sendFile(path.resolve(__dirname, './src/views/ingreso.html'))

});

app.post("/ingreso", (req,res)=>{
    res.redirect("/");
})
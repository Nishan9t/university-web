const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const cors= require('cors');

const app=express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended:false}))
app.use(bodyParser.json())

const connectDB =async()=>{
    try{
        await mongoose.connect('mongodb://localhost:27017/university');
        console.log("DB Connected");
    }
    catch(error)
    {
        console.log(error)
    }
}

//routes

app.get("/hello",(req,res)=>{
    return res.send("hello")
})


app.listen(8000,()=>{
    console.log("Server is running on port 8000");
    connectDB();
});
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const cors= require('cors');
const multer = require('multer')



const upload = multer({dest: 'uploads/'})


const serviceController=require('./controllers/serviceController')
const adminController = require('./controllers/adminController')

const app=express();

//to get images at /uploads
app.use("/uploads",express.static('uploads'))

app.use(cors());
//bodyparser parse the req.body from incoming requests
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

//upload.single(image)
//here image is the key of fromData sending from the frontend request

app.post("/api/services",upload.single('image'),serviceController.addServices)
app.get("/api/services",serviceController.getServices)

app.get('/api/slider',serviceController.getSlider)


app.get('/admin/admins',adminController.getAdmins)
app.post('/admin/add',adminController.addAdmin)
app.post('/admin/login',adminController.loginAdmin)

app.get("/hello",(req,res)=>{
    return res.send("hello")
})


app.listen(8000,()=>{
    console.log("Server is running on port 8000");
    connectDB();
});
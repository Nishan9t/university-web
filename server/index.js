const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const cors= require('cors');
const multer = require('multer');
require('dotenv').config()

const upload = multer({dest:'uploads/'})
const file = multer({dest:'files/'})



const serviceController=require('./controllers/serviceController')
const adminController = require('./controllers/adminController')
const courseController = require('./controllers/courseController')
const contactController = require('./controllers/contactController')
const aboutController = require('./controllers/aboutController')

const app=express();


app.use('/uploads',express.static('uploads'))
// app.use('/files',express.static('files'))
app.use(cors());
app.use(bodyParser.urlencoded({ extended:false}))
app.use(bodyParser.json())

const connectDB =async()=>{
    try{
        await mongoose.connect(process.env.DB);
        console.log("DB Connected");
    }
    catch(error)
    {
        console.log(error)
    }
}

//routes

app.post("/api/services",upload.single('image'),serviceController.addServices)
app.get("/api/services",serviceController.getServices)
app.delete("/api/services/delete/:id",serviceController.deleteService)

app.post("/api/courses",courseController.addCourses)
app.get("/api/courses",courseController.getCourses)
app.delete("/api/courses/delete/:id",courseController.deleteCourse)
app.post("/api/course/student/:id",courseController.addStudent)
app.get("/api/course/students/:id",courseController.getStudent)
app.post("/api/course/file",file.single('file'),courseController.addStudentFile)

app.post("/api/contacts",contactController.addContact)
app.get("/api/contacts",contactController.getContact)
app.delete("/api/contacts/delete/:id",contactController.deleteContact)


app.post("/api/abouts",aboutController.addAbout)
app.get("/api/abouts",aboutController.getAbout)
app.delete("/api/abouts/delete/:id",aboutController.deleteAbout)



app.post("/api/slider",serviceController.addSlider)
app.get('/api/slider',serviceController.getSlider)


app.get('/admin/admins',adminController.getAdmins)
app.post('/admin/add',adminController.addAdmin)
app.delete('/admin/delete/:id',adminController.deleteSubadmin)
app.post('/admin/login',adminController.loginAdmin)


app.get("/hello",(req,res)=>{
    return res.send("hello")
})


app.listen(8000,()=>{
    console.log("Server is running on port 8000");
    connectDB();
});
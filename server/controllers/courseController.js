const courseModel = require("../models/courseModel");
const studentModel=require("../models/studentModel");
const jwt =require('jsonwebtoken')


module.exports.addCourses=async(req,res)=>{

    if(!req.headers.authorization)
    {
        return res.send({code : 403 , message:"No Token"})
    }
    

    const userDetail = await jwt.verify(req.headers.authorization,'PRIVATEKEY')

    if(userDetail._doc.type !=='SUBADMIN' && userDetail._doc.type !=='ADMIN')
    {
        return res.send({code : 403 , message:"Unauthorized"})
    }

     //if token is created more 1hr ago then return token expire 
     if(userDetail.iat - new Date().getTime() > 3.6e+6){
        return res.send({code: 403 , message:"token expire"})
    }

    const title = req.body.title;
    const description = req.body.description;

    if(!title || !description)
    {
        return res.send({code:400 , message:"Bad request"})
    }

    const newCourse = new courseModel({title:title , description:description })

    const success = await newCourse.save();

    if(success)
    {
        return res.send({code : 200 , message:"course add success"})
    }
    else{
        return res.send({code : 500 , message:"api error"})
    }

}

module.exports.getCourses=async(req,res)=>{

    const _data= await courseModel.find({})

    if(_data)
    {
        return res.send({code : 200 , message: 'success' , data : _data})

    }
    else{
        return res.send({code:500 , message:"api error"});
    }

}

module.exports.deleteCourse=async(req,res)=>{
    try{
        if(!req.headers.authorization)
        {
            return res.send({code : 403 , message:"No Token"})
        }
        
    
        const userDetail = await jwt.verify(req.headers.authorization,'PRIVATEKEY')
    
        if(userDetail._doc.type !=='SUBADMIN' && userDetail._doc.type !=='ADMIN')
        {
            return res.send({code : 403 , message:"Unauthorized"})
        }
    
         //if token is created more 1hr ago then return token expire 
         if(userDetail.iat - new Date().getTime() > 3.6e+6){
            return res.send({code: 403 , message:"token expire"})
        }
    
       const id=req.params.id;
       console.log(id);
    
        if(!id)
        {
            return res.send({code:400 , message:"Bad request"})
        }
    
        const newCourse =await courseModel.deleteOne({_id:id});
    
    
        return res.send({code : 200 , message:"course delete success"})
        
       
    }
    catch(err)
    {
        return res.send({code : 500 , message:"api error"})
    }

   

}

module.exports.addStudent=async(req,res)=>{

    if(!req.headers.authorization)
    {
        return res.send({code : 403 , message:"No Token"})
    }
    

    const userDetail = await jwt.verify(req.headers.authorization,'PRIVATEKEY')

    if(userDetail._doc.type !=='SUBADMIN' && userDetail._doc.type !=='ADMIN')
    {
        return res.send({code : 403 , message:"Unauthorized"})
    }

     //if token is created more 1hr ago then return token expire 
     if(userDetail.iat - new Date().getTime() > 3.6e+6){
        return res.send({code: 403 , message:"token expire"})
    }

    const name = req.body.name;
    const roll = req.body.roll;
    const courseId = req.body.courseId;

    if(!name || !roll || !courseId)
    {
        return res.send({code:400 , message:"Bad request"})
    }

    const newStudent = new studentModel({name:name , roll:roll , courseId:courseId })

    const success = await newStudent.save();

    if(success)
    {
        return res.send({code : 200 , message:"student add success"})
    }
    else{
        return res.send({code : 500 , message:"api error"})
    }

}

module.exports.getStudent=async(req,res)=>{

    const courseId=req.params.id;
    

    const _data= await studentModel.find({courseId:courseId})
  

    if(_data)
    {
        return res.send({code : 200 , message: 'success' , data : _data})

    }
    else{
        return res.send({code:500 , message:"api error"});
    }

}
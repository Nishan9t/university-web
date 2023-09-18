const courseModel = require("../models/courseModel");


module.exports.addCourses=async(req,res)=>{

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
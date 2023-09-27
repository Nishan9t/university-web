const contactModel = require("../models/contactModel");
const jwt =require('jsonwebtoken');
const studentModel = require("../models/studentModel");


module.exports.addContact=async(req,res)=>{

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

    const title = req.body.title;
    const description = req.body.description;

    if(!title || !description)
    {
        return res.send({code:400 , message:"Bad request"})
    }

    const newContact = new contactModel({title:title , description:description })

    const success = await newContact.save();

    if(success)
    {
        return res.send({code : 200 , message:"contact add success"})
    }
    
    }
    catch(err)
    {
        return res.send({code : 500 , message:"api error"})
    }

    
}

module.exports.getContact=async(req,res)=>{

    const _data= await contactModel.find({})

    if(_data)
    {
        return res.send({code : 200 , message: 'success' , data : _data})

    }
    else{
        return res.send({code:500 , message:"api error"});
    }

}


module.exports.deleteContact=async(req,res)=>{

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
    
        const newContact =await contactModel.deleteOne({_id:id});
    
    
        return res.send({code : 200 , message:"contact delete success"})
        
       
    }
    catch(err)
    {
        return res.send({code : 500 , message:"api error"})
    }

    
}

module.exports.getStudent=async(req,res)=>{

    const courseId=req.params.id;
    

    const _data= await studentModel.find({courseId:courseId})
    console.log(_data)

    if(_data)
    {
        return res.send({code : 200 , message: 'success' , data : _data})

    }
    else{
        return res.send({code:500 , message:"api error"});
    }

}
const aboutModel = require("../models/aboutModel");
const jwt =require('jsonwebtoken')


module.exports.addAbout=async(req,res)=>{
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
    
        const newAbout = new aboutModel({title:title , description:description })
    
        const success = await newAbout.save();
    
        if(success)
        {
            return res.send({code : 200 , message:"about add success"})
        }
       
    }
    catch(err)
    {
        return res.send({code : 500 , message:"api error"})
    }

   

}

module.exports.getAbout=async(req,res)=>{

    const _data= await aboutModel.find({})

    if(_data)
    {
        return res.send({code : 200 , message: 'success' , data : _data})

    }
    else{
        return res.send({code:500 , message:"api error"});
    }

}


module.exports.deleteAbout=async(req,res)=>{
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
    
        const newAbout =await aboutModel.deleteOne({_id:id});
    
    
        return res.send({code : 200 , message:"about delete success"})
        
       
    }
    catch(err)
    {
        return res.send({code : 500 , message:"api error"})
    }

   

}
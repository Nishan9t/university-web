const servicesModel = require("../models/servicesModel")
const jwt = require('jsonwebtoken')
const slideModel = require("../models/slideModel")

module.exports.addServices=async(req,res)=>{

    

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
    const imageUrl = req.file.path

    if(!title || !description || !imageUrl)
    {
        return res.send({code:400 , message:"Bad request"})
    }

    const newService = new servicesModel({title:title , description:description , imageUrl:imageUrl})

    const success = await newService.save();

    if(success)
    {
        return res.send({code : 200 , message:"add success"})
    }
    else{
        return res.send({code : 500 , message:"service error"})
    }

   
}

module.exports.getServices=async(req,res)=>{
    const _data= await servicesModel.find({})

    if(_data)
    {
        return res.send({code : 200 , message: 'success' , data : _data})

    }
    else{
        return res.send({code:500 , message:"service error"});
    }
}

 //slider images

 module.exports.getSlider=async(req,res)=>{

    const _data= await slideModel.find({});

 
     // Extract link field values and store them in an array
     const linkArray = _data.map(doc => doc.link);

    // const url1='https://picsum.photos/id/1/1550/550'
    // const url2='https://picsum.photos/id/2/1550/550'
    // const url3='https://picsum.photos/id/3/1550/550'
    // const arr =[url1,url2,url3]
    return res.send({code:200 , message:"success",data: linkArray})
}

module.exports.addSlider=async(req,res)=>{
   
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

    const url1=req.body.link1
    


    if(!url1)
    {
        return res.send({code:400 , message:"Bad request"})
    }

    const newSlide = new slideModel({link:url1})

    const success = await newSlide.save();

    if(success)
    {
        return res.send({code : 200 , message:"add success"})
    }
    else{
        return res.send({code : 500 , message:"service error"})
    }
}

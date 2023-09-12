const servicesModel = require("../models/servicesModel")

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

module.exports.addServices=async(req,res)=>{
    const title = req.body.title;
    const description = req.body.description;

    if(!title || !description)
    {
        return res.send({code:400 , message:"Bad request"})
    }

    const newService = new servicesModel({title:title , description:description})

    const success = await newService.save();

    if(success)
    {
        return res.send({code : 200 , message:"add success"})
    }
    else{
        return res.send({code : 500 , message:"service error"})
    }

   
}

 //slider images

 module.exports.getSlider=async(req,res)=>{
    const url1='https://picsum.photos/id/1/1550/550'
    const url2='https://picsum.photos/id/2/1550/550'
    const url3='https://picsum.photos/id/3/1550/550'
    const arr =[url1,url2,url3]
    return res.send({code:200 , message:"success",data: arr})
}

const adminModel = require("../models/adminModel");
const jwt=require('jsonwebtoken');

module.exports.getAdmins=async(req,res)=>{
    const _data = await adminModel.find({})
    if(_data)
    {
        return res.send({code:200 , message:'success', data:_data})
    }
    else{
        return res.send({code:500 , message:'service error'})
    }
}


//add admin
module.exports.addAdmin=async(req,res)=>{
    const {userName , password , type , status ,date} = req.body
    if(!userName || !password){
        return res.send({code:400 , message:'fields cannot be empty'})
    }

    const _res= await adminModel.create({userName,password,type,status,date});

    if(_res)
    {
        return res.send({code:200 , message:'success'})
    }
    else{
        return res.send({code:500 , message:'service error'})
    }
}

module.exports.loginAdmin=async(req,res)=>{

    const {userName,password} = req.body;
    if (!userName||!password )
    {
        return res.send({code:400 , message:"Give username and password"})
    }
    const userExists = await adminModel.findOne({userName:userName})

    if(!userExists)
    {
        return res.send({code:404 , message:"user not found"})
    }

    if(userExists.password === password)
    {
        const _token=jwt.sign({...userExists} , 'PRIVATEKEY')
        return res.send({code:200 , message:"Login Success" , token:_token , type: userExists.type})
    }
    else{
        return res.send({code:500 , message:'service error'})
    }

    

}
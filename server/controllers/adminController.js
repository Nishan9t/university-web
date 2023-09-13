const adminModel = require("../models/adminModel");


module.exports.getAdmin=async(req,res)=>{
    const _data = await adminModel.find({})
    if(_data)
    {
        return res.send({code:200 , message:'success', data:_data})
    }
    else{
        return res.send({code:500 , message:'service error'})
    }
}
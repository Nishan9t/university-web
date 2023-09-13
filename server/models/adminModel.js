const mongoose=require('mongoose');

const adminSchema=mongoose.Schema({
    userName:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    type:{
        type:String,
        
        default:"subadmin",
    },
    status:{
        type:String,
        default:"ACTIVE"
    },
    date:{
        type:String,
        default:new Date()
    },
});

const adminModel = mongoose.model('adminModel',adminSchema);
module.exports=adminModel

// adminModel.create({
//     userName:'admin-default',
//     password:'pass123',
//     type:'admin',
//     status:"ACTIVE",
//     data:new Date(),
// })
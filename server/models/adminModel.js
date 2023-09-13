const mongoose=require('mongoose');

const adminSchema=mongoose.Schema({
    userName:String,
    password:String,
    type:String,
    status:String,
    date:String,
});

const adminModel = mongoose.model('adminModel',adminSchema);
module.exports=adminModel

adminModel.create({
    userName:'admin-default',
    password:'pass123',
    type:'admin',
    status:"ACTIVE",
    data:new Date(),
})

const mongoose = require('mongoose');

const courseSchema = mongoose.Schema({
    title: {
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    }
})

const courseModel = mongoose.model('course',courseSchema)

module.exports=courseModel;
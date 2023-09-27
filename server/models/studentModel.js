const mongoose = require('mongoose');

const studentSchema = mongoose.Schema({
    name: {
        type:String,
        required:true
    },
    roll:{
        type:String,
        required:true
    },
    courseId:{
        type:String,
        required:true
    }
})

const studentModel = mongoose.model('student',studentSchema)

module.exports=studentModel;
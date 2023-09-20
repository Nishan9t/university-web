const mongoose = require('mongoose');

const contactSchema = mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    }
})

const contactModel = mongoose.model('contact',contactSchema);

module.exports=contactModel;
const mongoose = require('mongoose');

const AboutSchema = mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    }
})

const AboutModel = mongoose.model('About',AboutSchema);

module.exports=AboutModel;
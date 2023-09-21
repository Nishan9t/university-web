const mongoose = require('mongoose');

const slideSchema = mongoose.Schema({
    link:{
        type:String,
        required:true
    }
   
})

const slideModel = mongoose.model('slide',slideSchema);

module.exports=slideModel;
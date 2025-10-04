const mongoose= require("mongoose");

const productorSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    sede:{
        type:String,
    }

});


module.exports=mongoose.model('Productor',productorSchema);
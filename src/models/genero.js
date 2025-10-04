const mongoose= require("mongoose");

const generoSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true,
    }
});


module.exports= mongoose.model("Genero",generoSchema);
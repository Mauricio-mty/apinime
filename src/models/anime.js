const mongoose= require("mongoose");

const animeSchema= new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    sinopsis:{
        type:String,
        required:true,
    },
    publication_date:{
        type:Date
    },
    episode:{
        type:Number,
        required:true
    }
    
});


module.exports= mongoose.model("Anime",animeSchema);
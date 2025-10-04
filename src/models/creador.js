const mongoose = require('mongoose');

const creadorSchema = new mongoose.Schema({
    nombre:{
        type:String,
        required:true,
    },
    biografia:{
        type:String,
        required:true
    },

});

module.exports=mongoose.model('Creador',creadorSchema);

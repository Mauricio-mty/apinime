const Genero=require("../models/genero");

exports.newGenero=async(req,res)=>{
    try {
        const new_genero = new Genero(req.body);
        await new_genero.save();
        res.status(201).json(new_genero);
        
    } catch (error) {
        return res.status(500).json({error:"Error interno del servidor"});
    }
}

const Productora = require("../models/productora")


exports.newProductora=async(req,res)=>{
    try {
        const new_data= new Productora(req.body);
        await new_data.save();
        res.status(201).json(new_data);
    } catch (error) {
        return res.status(500).json({error:"Error interno del servidor"});
    }
}
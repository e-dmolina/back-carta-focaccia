const { Schema, model } = require('mongoose');

const ProductoSchema = new Schema({
    id:{ type:String },
    nombre:{ type:String, required:true, trim:true, unique:true },
    categoria:{ type:String, required:true },
    precioCompleto:{ type:String, required:true },
    precioMitad:{ type:String },
});

module.exports = model('Productos', ProductoSchema);
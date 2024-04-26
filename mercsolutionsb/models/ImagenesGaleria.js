const { Schema, model } = require("mongoose");

const galeriaSchema = new Schema({
    nombre: {
        type: String,
        require: [true, "Se necesita el nombre de la imágen"]
    },
    descripcion: {
        type: String,
        require: [true, "Se necesita el Descripción de la imágen"]
    },
    fecha: {
        type: Date,
        require: true,
        type: Date, default: Date.now
    },

    key:{
        type:Number,
        required:false,
        unique:false    
    }
});

module.exports = model("Galeria", galeriaSchema);
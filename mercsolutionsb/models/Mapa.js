const { Schema, model } = require("mongoose");

const mapaSchema = new Schema({
    nombre:{
        type: String,
        require: [true, "Se necesita el nombre del estado"],
        unique:true
    },

    ciudades:{
        type:[String]
    },

    identificador:{
        type:String,
        require: [true, "Se necesita el identificador del estado"],
        unique:true
    },

    coordenadas:{
        type:String,
        required: [true, "Se necesitan las coordenadas del estado"],
        unique:true

    },

    activo:{
        type:Boolean,
        default:false
    }
   
});

module.exports=model( "Mapa", mapaSchema)
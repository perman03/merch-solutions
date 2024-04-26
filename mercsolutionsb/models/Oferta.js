import {Schema, model} from "mongoose";

const ofertaSchema=new Schema({
    puesto:{
        type:String,
        required:[true, "Se necesita el nombre del puesto"]
    },
    ubicacion:{
        type:String,
        required:[true, "Se necesita la ubicacion del puesto"]
    },
    descripcion:{
        type:String,
        required:[true, "Se necesita la descripcion del puesto"]
    },
    fecha_publicacion:{
        type: Date, default: Date.now
    },
    requerimientos:{
        type:String,
        required:[true, "Se necesitan los requerimientos del puesto"]
    },
    salario: Number
});

module.exports=model( "Oferta", ofertaSchema)
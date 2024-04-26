const {Schema, model}=require("mongoose");
const uniqueValidator = require('mongoose-unique-validator')

let rolesValidos = {
    values: ['ADMIN_ROL', 'RH_ROL', 'MEDIA_ROL'],
    message: "{VALUE} No es un rol valido"
}

const usuarioSchema= new Schema({
    numeroTrabajador: {
        type:String,
        require:[true, "Se necesita el numero de trabajador"],
        unique:true
    },
    nombre: {
        type:String,
        require:[true, "Se necesita el nombre"]
    },
    apellidos:{
        type:String,
        require:[true, "Se necesitan los apellidos"]
    },
    foto: {
        type:String,
        require:false
    }
    ,
    password:{
        type:String,
        require:[true, "Se necesita establecer una contraseña"],
    },
    rol:{
        type:String,
        required: true,
        enum: rolesValidos
    },
    numeroCelula: {
        type: String
    },
    nombreCelula:{
        type: String
    },
    archivar: {
        type: Boolean,
        default: false
    }
});

usuarioSchema.plugin(uniqueValidator, { message: '{PATH} debe ser unico' })
module.exports=model("Usuario", usuarioSchema);
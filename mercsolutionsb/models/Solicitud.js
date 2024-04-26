const {Schema, model}=require("mongoose");

const solicitudSchema=new Schema({
    nombre:{
        type:String,
        require:[true, "Se necesita el nombre"]
    },
    apellidos:{
        type:String,
        require:[true, "Se necesitan los apellidos"]
    },

    correo:{
        type:String,
        require:[true, "Se necesita un correo electronico "]
    },

    cv:{
        type:String,
        require:[true, "Necesita subir su curriculum"]
    },
    telefono:{
        type:String,
        require:[true, "Proporcione un número de contacto"]
    },
    puesto:{
        type:String
    },
    lugar:{
        type:String
    },
    edad:{
        type:Number,
        min: 18,
        max: 99, 
        default:18
    },
    educacion:{
        type:[String]
    },
    experiencia:{
        type:[String]
    },
    fechaDeEnvio: {
        type: Date, default: Date.now
    },
    visto:{
        type: Boolean, default:false
    },
    img: {
        type: String, 
        require:[true, "Proporcione una foto"]
    },
    archivar:{
        type: Boolean, default:false
    },
    genero: {
        type: String, 
        require:[true, "Indique su genero"]
    },
    disponibilidadViajar: {
        type: Boolean
        
    },
    disponibilidadResidencia: {
        type: Boolean
        
    },
    idOferta:{
        type: String
    },
    Eliminar:{
        type:Boolean,
        default:false
    }
});

module.exports=model("Solicitud", solicitudSchema);
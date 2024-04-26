const {Schema, model}=require("mongoose");

const eventoSchema=new Schema({
    subtitulo:{
        type: String,
        require:[true, "Se necesita especificar el subtitulo"],
        unique: true,
    },

    contenidoTexto:{
        type: String,
        
    },
    
    contenidoImagen:{
        type: String,
        
    }
});

module.exports=model("SubComponente", eventoSchema);
const {Schema, model}=require("mongoose");

const eventoSchema=new Schema({
    pagina:{
        type:String,
        require:[true, "Se necesita especificar página"]
    },
    etiqueta:{
        type:String,
        require:[true, "Se necesita especificar etiqueda"]
    },
    titulo: {
        type:String,
        require:[true, "Se necesita especificar título"],
        unique: true

    },
    subComponente: {
        type: [Schema.ObjectId],
        ref: 'SubComponente'
    }
});

module.exports=model("Componente", eventoSchema);
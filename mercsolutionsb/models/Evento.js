const { Schema, model } = require("mongoose");

const eventoSchema = new Schema({
    nombre: {
        type: String,
        require: [true, "Se necesita el nombre del evento"]
    },
    descripcion: {
        type: String,
        require: false
    },
    fecha: {
        type: Date,
        require: false
    },
    imagen: {
        type: String,
        require: false
    }
});

module.exports = model("Evento", eventoSchema);

//===========================================
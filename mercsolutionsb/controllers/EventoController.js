import Evento from '../models/Evento';


export default {
    agregar: async(req, res, next) => {
        try {
            if (req.file == undefined || req.file.path == undefined) {
                return res.send(`Selecciona un archivo valido (jpg o png).`);
            }
            const { nombre, descripcion, fecha, imagen } = req.body;
            const evento = new Evento({
                nombre: nombre,
                descripcion: descripcion,
                fecha: fecha,
                imagen: req.file.path 
            });
            res.status(200).json(evento);
            await evento.save();
        } catch (e) {
            console.log(e);
            res.status(500).send("Error al crear el evento");
        }
    },
    borrar: async(req, res, next) => {
        const id = req.params.id;
        try {
            const reg = await Evento.findByIdAndDelete({ _id: id });
            res.status(200).json(reg);
        } catch (e) {
            res.status(500).send({ message: 'Ocurrió un error al borrar' });
        }
    },
    actualizar: async(req, res, next) => {
        const id = req.params.id;
        const { nombre, descripcion, fecha, imagen } = req.body;
        try {
            const reg = await Evento.findByIdAndUpdate({ _id: id }, { nombre: nombre, descripcion: descripcion, fecha: fecha, imagen: imagen });
            res.status(200).json(reg);
        } catch (e) {
            res.status(500).send({
                message: 'Ocurrió un error'
            });
        }

    },
    buscar: async(req, res, next) => {
        const { nombre } = req.body
        try {
            const reg = await Evento.findOne({ nombre: nombre });
            res.status(200).json(reg);
        } catch (e) {
            res.status(500).send({
                message: 'Ocurrió un error'
            });
        }

    },
    listar: async(req, res, next) => {
        try {
            const busq = await Evento.find({});
            res.status(200).json(busq);
        } catch (e) {
            console.log(e);
            res.status(500).send("Error al listar");
        }
    }
}
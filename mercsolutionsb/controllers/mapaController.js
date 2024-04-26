import Mapa  from '../models/Mapa';


export default {
    agregar: async(req, res, next) => {
        try {
            
            const reg = await Mapa.create(req.body);
            res.status(200).json(reg);
        } catch (e) {
            res.status(500).send({
                message: 'Ocurrió un error al agregar'
            });
            next(e);
        }
    },

    listar: async(req, res, next) => {
        try {            
            const reg = await Mapa.find({});
            res.status(200).json(reg);
        } catch (e) {
            res.status(500).send({
                message: 'Ocurrió un error'
            });
            next(e);
        }
    },  
    
    activar: async(req, res, next) => {
        try{
            const id = req.body.id;
            const reg = await Mapa.findByIdAndUpdate({_id:id }, {activo: true});
            res.status(200).json(reg);
        }catch(e){
            console.log(e);
            res.status(500).send("Error al activar");
        }
    },

    desActivar: async(req, res, next) => {
        try{
            console.log(req.body)
            const id = req.body.id;
            const reg = await Mapa.findByIdAndUpdate({_id:id }, {activo: false});
            res.status(200).json(reg);
        }catch(e){
            console.log(e);
            res.status(500).send("Error al crear el evento");
        }

    },

    actualizar:  async(req, res, next) => {
        try {
            const id = req.body.id;
            console.log("EL ID ES:::::::::::::::: " +id)
            const reg = await Mapa.findByIdAndUpdate({ _id: id }, {ciudades:req.body.ciudades, activo: true});
            res.status(200).json(reg);
        } catch (e) {
            res.status(500).send({
                message: 'Ocurrió un error'
            });
            next(e);
        }
    },

    eliminar: async (req,res,next) => {
        try {
            const id = req.body.id;
            const reg = await Mapa.findByIdAndDelete({_id:id});
            res.status(200).json(reg);
        } catch(e){
            res.status(500).send({
                message:'Ocurrió un error'
            });
            next(e);
        }
    }

}
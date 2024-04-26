import Componente from '../models/Componente';


export default {
    agregar: async (req,res,next) =>{
        try {
            const reg = await Componente.create(req.body);
            res.status(200).json(reg);
        } catch (e){
            res.status(500).send({
                message:'Ocurrió un error'
            });
            next(e);
        }
    },
    
    agregarSubcomponente: async (req,res,next) => {
        try {
            const reg = await Componente.findOneAndUpdate({titulo:req.body.titulo}, {$push: {subComponente: req.body.subComponente}});
            res.status(200).json(reg);
        } catch(e){
            res.status(500).send({
                message:'Ocurrió un error al agregar Subitem'
            });
            next(e);
        }
    },
   
    
    listar: async (req,res,next) =>{
        try {
            const reg = await Componente.find({});
            res.status(200).json(reg);
        } catch (e){
            res.status(500).send({
                message:'Ocurrió un error'
            });
            next(e);
        }
    },



    listarUno: async (req,res,next) =>{
        try {
            const reg = await Componente.findOne({titulo: req.body.titulo});
            res.status(200).json(reg);
        } catch (e){
            res.status(500).send({
                message:'Ocurrió un error'
            });
            next(e);
        }
    },

    actualizar: async (req, res, next) => {
        try {
            const reg = await Componente.findOneAndUpdate({titulo: req.body.titulo},{pagina: req.body.pagina, etiqueta: req.body.etiqueta, titulo: req.body.titulo});
            res.status(200).json(reg);
        } catch (e){
            res.status(500).send({
                message:'Ocurrió un error'
            });
            next(e);
        }
    },

    remover: async (req,res,next) => {
        try {
            const reg = await Componente.findByIdAndDelete({titulo:req.body.titulo});
            res.status(200).json(reg);
        } catch(e){
            res.status(500).send({
                message:'Ocurrió un error'
            });
            next(e);
        }
    }
}
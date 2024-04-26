import subComponente from '../models/SubComponente'
import SubComponente from '../models/SubComponente';

export default {
    agregar: async (req,res,next) => {
        try {
            const reg = await subComponente.create(req.body);
            res.status(200).json(reg);
        } catch (e){
            res.status(500).send({
                message:'Ocurrió un error'
            });
            next(e);
        }
    },
    
    agregarImagen: async (req,res,next) => {
        try {
            const reg = await subComponente.findOneAndUpdate({titulo:req.body.titulo}, {contenidoImagen: req.body.contenidoImagen});
            res.status(200).json(reg);
        } catch(e){
            res.status(500).send({
                message:'Ocurrió un error'
            });
            next(e);
        }
    },
    listarSubComponentes: async (req,res,next) => {
        try {
            const reg = await subComponente.findOneAndUpdate({subtitulo:req.body.titulo}, {contenidoImagen: req.body.contenidoImagen});
            res.status(200).json(reg);
        } catch(e){
            res.status(500).send({
                message:'Ocurrió un error'
            });
            next(e);
        }
    },

    agregarSubtitulo: async (req,res,next) => {
        try {
            
            const reg = await subComponente.findOneAndUpdate({titulo:req.body.titulo}, {subtitulo: req.body.subtitulo});
            res.status(200).json(reg);
        } catch(e){
            res.status(500).send({
                message:'Ocurrió un error'
            });
            next(e);
        }
    },

    agregarTexto: async (req,res,next) => {
        try {
            const reg = await subComponente.findOneAndUpdate({titulo:req.body.titulo}, {contenidoTexto: req.body.contenidoTexto});
            res.status(200).json(reg);
        } catch(e){
            res.status(500).send({
                message:'Ocurrió un error al agregar Texto'
            });
            next(e);
        }
    },
    
    listar: async (req,res,next) =>{
        try {
            const reg = await subComponente.find({});
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
            const reg = await subComponente.findOne({subtitulo: req.body.subtitulo});
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
            const reg = await SubComponente.findOneAndUpdate({subtitulo: req.body.subtitulo},{subtitulo: req.body.subtitulo, contenidoImagen: req.body.contenidoImagen, contenidoTexto: req.body.contenidoTexto});
            res.status(200).json(reg);
        } catch (e){
            res.status(500).send({
                message:'Ocurrió un error'
            });
            next(e);
        }
    },

    removerSubcomponente: async (req,res,next) => {
        try {
            const reg = await subComponente.findByIdAndDelete({subtitulo:req.body.subtitulo});
            res.status(200).json(reg);
        } catch(e){
            res.status(500).send({
                message:'Ocurrió un error'
            });
            next(e);
        }
    }
    
    
    
}
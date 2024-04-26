import Galeria from '../models/ImagenesGaleria';
import aws from 'aws-sdk';

export default {
    agregar: async (req,res,next) =>{
        try {
            const reg = await Galeria.create(req.body);
            res.status(200).json(reg);
        } catch (e){
            res.status(500).send({
                message:'Ocurrió un error'
            });
            next(e);
        }
    },
    
    cargarArchivos(){

    },

    eliminarArchivos: async (req,res,next) =>{
        console.log(req.body.imagen)   
        try {
            const s3 = new aws.S3({
                secretAccessKey: process.env.S3_ACCESS_SECRET,
                accessKeyId: process.env.S3_ACCESS_KEY,
                region: 'us-east-2',
              });
              
              const params = {
                  Bucket: 'mercsolutions-files',
                  Key: req.body.imagen
              };
              
              s3.deleteObject(params, (error, data) => {
                if (error) {
                  res.status(500).send(error);
                }
                res.status(200).send("File has been deleted successfully");
              });
        } catch (e){
           
            next(e);
        }
    },

   
    
    listar: async (req,res,next) =>{
        try {
            const reg = await Galeria.find({});
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
            const reg = await Galeria.findOne({nombre: req.body.nombre});
            res.status(200).json(reg);
        } catch (e){
            res.status(500).send({
                message:'Ocurrió un error'
            });
            next(e);
        }
    },




    eliminar: async (req,res,next) => {
        console.log('Estoy eliminando de la galeria.....')
        console.log( req.body)
        const _id = req.body._id 
        
        try {
            const reg = await Galeria.findByIdAndDelete({_id:_id});
            res.status(200).json(reg);
        } catch(e){
            res.status(500).send({
                message:'Ocurrió un error al eliminar'
            });
            next(e);
        }
    },

    actualizar:async(req,res, next)=>{
        const _id=req.body.id;
        const newInfo=req.body;
        try{
            const updated=await Galeria.findByIdAndUpdate({_id:_id}, {$set:newInfo});
            res.status(200).json(updated);
        }catch(e){
            console.log(e.message);
            res.status(500).send("Error al actualizar")
        }
    },
}
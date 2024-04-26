import Solicitud from '../models/Solicitud';
import aws from 'aws-sdk';

export default {
    agregar: async (req,res,next) =>{
        try {
            const reg = await Solicitud.create(req.body);
            res.status(200).json(reg);
        } catch (e){
            res.status(500).send({
                message:'Ocurrió un error'
            });
            next(e);
        }
    },
    listar: async (req,res,next) => {
        try {
            let valor=req.query.valor;
            const reg=await Solicitud.find()
            res.status(200).json(reg);
        } catch(e){
            res.status(500).send({
                message:'Ocurrió un error'
            });
            next(e);
        }
    },

    eliminar: async (req,res,next) => {
        console.log('Estoy eliminando.....')
        const idSolicitud = req.body.id 
        console.log( req.body)
        try {
            const reg = await Solicitud.findByIdAndDelete({_id:idSolicitud});
            res.status(200).json(reg);
        } catch(e){
            res.status(500).send({
                message:'Ocurrió un error al eliminar'
            });
            next(e);
        }
    },


    desmarcar: async (req,res,next) => {
        const _id = req.params.id 
        const body = req.body 
        try {
            const reg = await Solicitud.findByIdAndUpdate(_id,{visto:true});
            res.status(200).json(reg);
        } catch(e){
            res.status(500).send({
                message:'Ocurrió un error'
            });
            next(e);
        }
    },
    archivar:async (req,res,next) => {
     
        const _id = req.params.id
        const body = req.body
        console.log('Voy a archivar a:  ' + _id ) 
        try {
            const reg = await Solicitud.findByIdAndUpdate(_id,{archivar:true});
            res.status(200).json(reg);
        } catch(e){
            res.status(500).send({
                message:'Ocurrió un error'
            });
            next(e);
        }
    },
    desarchivar:async (req,res,next) => {
        const _id = req.params.id 
        const body = req.body
        try {
            const reg = await Solicitud.findByIdAndUpdate(_id,{archivar:false});
            res.status(200).json(reg);
        } catch(e){
            res.status(500).send({
                message:'Ocurrió un error'
            });
            next(e);
        }
    },

    deseliminar:async (req,res,next) => {
        const _id = req.params.id 
        const body = req.body
        try {
            const reg = await Solicitud.findByIdAndUpdate(_id,{archivar:false, Eliminar:false, visto:false});
            res.status(200).json(reg);
        } catch(e){
            res.status(500).send({
                message:'Ocurrió un error'
            });
            next(e);
        }
    },



    cargarArchivos(){
        
    },

    eliminarArchivos: async (req,res,next) =>{
        
        try {
            const s3 = new aws.S3({
                secretAccessKey: process.env.S3_ACCESS_SECRET,
                accessKeyId: process.env.S3_ACCESS_KEY,
                region: 'us-east-2',
              });
              
              const params1 = {
                  Bucket: 'mercsolutions-files',
                  Key: req.body.foto
              };

               //Eliminando la foto
               s3.deleteObject(params1, (error, data) => {
                if (error) {
                  res.status(500).send(error);
                }
                res.status(200).send("La foto ha sido eliminada");
              });

        } catch (e){
           
            next(e);
        }
    },

    eliminarArchivos2: async (req,res,next) =>{
        
        try {
            const s3 = new aws.S3({
                secretAccessKey: process.env.S3_ACCESS_SECRET,
                accessKeyId: process.env.S3_ACCESS_KEY,
                region: 'us-east-2',
              });
              
             

              const params2 = {
                Bucket: 'mercsolutions-files',
                Key: req.body.cv
            };

             //Eliminando la cv
             s3.deleteObject(params2, (error, data) => {
                if (error) {
                  res.status(500).send(error);
                }
                res.status(200).send("El CV ha sido eliminado");
              });

              
             


        } catch (e){
           
            next(e);
        }
    },
    
    

    actualizar:async(req,res, next)=>{
        const _id=req.params.id;
        const newInfo=req.body;
        try{
            const updated=await Solicitud.findByIdAndUpdate({_id:_id}, {$set:newInfo});
            res.status(200).json(updated);
        }catch(e){
            console.log(e.message);
            res.status(500).send("Error al actualizar")
        }
    },

    listarId:async(req, res, next)=>{
        const _id=req.params.id;
        console.log(_id)
        try{
            const result=await Solicitud.findById({_id:_id},{__v:0});
            res.status(200).json(result)
        }catch(e){
            res.status(500).send("Error al obtener la solicitud")
        }
    },

}
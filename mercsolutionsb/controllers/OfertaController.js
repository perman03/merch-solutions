import Oferta from "../models/Oferta";

export default{
    agregar:async(req, res, next)=>{
        try{
            //const offer=await Oferta.create(req.body);
            const { puesto, ubicacion, descripcion, fecha_publicacion, requerimientos, salario } = req.body;
            const oferta = new Oferta({
                puesto: puesto,
                ubicacion: ubicacion,
                descripcion: descripcion,
                fecha_publicacion: fecha_publicacion,
                requerimientos: requerimientos,
                salario: salario
            })
            res.status(200).json(oferta);
            await oferta.save();
        }catch(e){
            console.log(e);
            res.status(500).send("Error al añadir la oferta");
        }
    },
    borrar:async(req, res, next)=>{
        try{
            const _id=req.params.id;
            console.log("EL ID QUE VOY A BORRAR ES: "+_id)
            const borrado=await Oferta.findByIdAndDelete({_id:_id}, {__v:0});
            res.status(200).json(borrado);
        }catch(e){
            res.status(500).send("Error al borrar la oferta");
        }
    },
    listar:async(req, res, next)=>{
        try{
            
            //const ofertas=await Oferta.find({}, {__v:0});
           let ubicacion = req.query.ubicacion
           let puesto = req.query.puesto
          

            const ofertas=await Oferta.find(req.query);
            console.log(req.query)
            


            res.status(200).json(ofertas);
        }catch(e){
            res.status(500).send("Error al listar las ofertas")
        }
    },
    listarId:async(req, res, next)=>{
        const _id=req.params.id;
        console.log("Buscando: "+_id )
        try{
            const result=await Oferta.findById({_id:_id},{__v:0});
            res.status(200).json(result)
        }catch(e){
            res.status(500).send("Error al obtener la oferta")
        }
    },

    buscar:async(req, res, next)=>{
        try{
            
            //const ofertas=await Oferta.find({}, {__v:0});
           let descripcion = req.query.descripcion
           let puesto = req.query.puesto
          
           const reg=await Oferta.find({$or:[{'puesto':new RegExp(puesto,'i')},{'descripcion':new RegExp(descripcion,'i')}]},{createdAt:0})
            
            

            
            res.status(200).json(reg);
        }catch(e){
            res.status(500).send("Error al listar las ofertas")
        }
    },




    actualizar:async(req, res, next)=>{
        const _id=req.params.id;
        const {ubicacion, puesto, salario, descripcion, requerimientos}=req.body;
        try{
            const updated=await Oferta.findByIdAndUpdate({_id:_id},{ubicacion:ubicacion, puesto:puesto, salario:salario, descripcion:descripcion, requerimientos:requerimientos})
            res.status(200).json(updated);
        }catch(e){
            res.status(500).send("Error al actualizar")
        }
    }
}
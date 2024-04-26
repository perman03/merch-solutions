import Usuario  from '../models/Usuario';
import bcrypt from 'bcryptjs';
import token from '../services/token'
export default {
    
    agregar: async(req, res, next) => {
        try {
            req.body.password = await bcrypt.hash(req.body.password, 10);
            const reg = await Usuario.create(req.body);
            res.status(200).json(reg);
        } catch (e) {
            res.status(500).send({
                message: 'Ocurrió un error'
            });
            next(e);
        }
    },

    archivar: async(req, res, next) => {
        try{
            const id = req.params.id;
            const reg = await Usuario.findbyIdandUpdate({_id: id }, {archivar: true});
            res.status(200).json(reg);
        }catch(e){
            console.log(e);
            res.status(500).send("Error al crear el evento");
        }

    },

    actualizar:  async(req, res, next) => {
        try {
            const id = req.params.id;
            const reg = await Usuario.findByIdAndUpdate({ _id: id }, {numeroTrabajador: req.body.numeroTrabajador, nombre: req.body.nombre, apellidos: req.body.apellidos, foto: req.body.foto, password: req.body.password, rol: req.body.rol, numeroCelula: req.body.numeroCelula, nombreCelula: req.body.nombreCelula  });
            res.status(200).json(reg);
        } catch (e) {
            res.status(500).send({
                message: 'Ocurrió un error'
            });
            next(e);
        }
    },
    
   buscarUno: async (req, res, next) => {    
        try {
            const id = req.params.id;
            const reg = await Usuario.findOne({_id: id})
            res.status(200).json(reg);
        } catch (e) {
            res.status(500).send({
                message: 'Ocurrió un error'
            });
            next(e);
        }
    },
    
    listar: async(req, res, next) => {
        try {            
            const reg = await Usuario.find({});
            res.status(200).json(reg);
        } catch (e) {
            res.status(500).send({
                message: 'Ocurrió un error'
            });
            next(e);
        }
    },  
    
    //El usuario se va a loggear con su password y su número de trabajador y se le va a dar un token
    login: async(req, res, next) => {
        try {
            let user = await Usuario.findOne({ numeroTrabajador: req.body.numeroTrabajador, archivar: false });
            if (user) {
                let match = await bcrypt.compare(req.body.password, user.password);
                if (match) {
                    let tokenReturn = await token.encode(user._id, user.rol, user.numeroTrabajador);
                    res.status(200).json({ user, tokenReturn });
                } else {
                    res.status(404).send({
                        message: 'Password Incorrecto'
                    });
                }
            } else {
                res.status(404).send({
                    message: 'No existe el usuario'
                });
            }
        } catch (e) {
            res.status(500).send({
                message: 'Ocurrió un error'
            });
            next(e);
        }
    }
    
}
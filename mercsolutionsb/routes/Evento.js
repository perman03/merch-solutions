import routerx from 'express-promise-router';
import EventoController from '../controllers/EventoController';
import auth from '../middlewares/authentication'
import {uploadPhotoFile} from "../middlewares/upload"

const router = routerx();

//Los middlewares se pasan como segundo argumento
//router.post('/agregar',  uploadcvFile, EventoController.agregar);
router.post('/agregar', [auth.verifyLogin, auth.verifyMedia, uploadPhotoFile], EventoController.agregar);
router.get('/listar', [auth.verifyLogin, auth.verifyMedia], EventoController.listar);
router.get('/buscar', [auth.verifyLogin, auth.verifyMedia], EventoController.buscar);
router.delete('/borrar/:id', [auth.verifyLogin, auth.verifyMedia], EventoController.borrar);
router.put('/actualizar/:id', [auth.verifyLogin, auth.verifyMedia], EventoController.actualizar);

export default router;
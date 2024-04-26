import routerx from 'express-promise-router';
import solicitud from '../controllers/SolicitudController';
import auth from '../middlewares/authentication'
import {uploadcvFile} from "../middlewares/upload"



const router = routerx();
//Los middlewares se pasan como segundo argumento
router.post('/agregar',[uploadcvFile], solicitud.agregar);
router.post('/cargarArchivos',[uploadcvFile], solicitud.cargarArchivos);
/*
router.get('/listar', [auth.verifyLogin, auth.verifyRH] ,solicitud.listar);
router.put('/desmarcar/:id', [auth.verifyLogin, auth.verifyRH] , solicitud.desmarcar);
router.put('/archivar/:id', [auth.verifyLogin, auth.verifyRH] ,solicitud.archivar);
router.put('/desarchivar/:id', [auth.verifyLogin, auth.verifyRH] ,solicitud.desarchivar);
router.delete('/eliminar/:id', [auth.verifyLogin, auth.verifyRH] ,solicitud.eliminar);
*/
router.get('/listar', solicitud.listar);
router.get('/listar/:id', solicitud.listarId);
router.put('/desmarcar/:id', solicitud.desmarcar);
router.put('/archivar/:id', solicitud.archivar);
router.put('/desarchivar/:id', solicitud.desarchivar);
router.patch('/eliminar', solicitud.eliminar);
router.post('/eliminarArchivos', solicitud.eliminarArchivos)
router.post('/eliminarArchivos2', solicitud.eliminarArchivos2)
router.patch('/actualizar/:id', solicitud.actualizar);
export default router;
import routerx from 'express-promise-router';
import galeria from '../controllers/galeriaController';
import auth from '../middlewares/authentication'
import {uploadcvFile, borrar} from "../middlewares/upload"

const router = routerx();

router.post('/agregar',[uploadcvFile], galeria.agregar);
router.post('/cargarArchivos', [uploadcvFile], galeria.cargarArchivos);
router.post('/eliminarImagen' , galeria.eliminarArchivos);
router.get('/listar', galeria.listar);
router.get('/listarUno', galeria.listarUno)
router.patch('/actualizar', galeria.actualizar)
router.patch('/eliminar', galeria.eliminar);


export default router;







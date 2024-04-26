import routerx from 'express-promise-router';
import MapaController from '../controllers/mapaController';
import auth from '../middlewares/authentication'

const router = routerx();
router.post('/agregar', MapaController.agregar)
router.get('/listar', MapaController.listar);
router.post('/actualizar', MapaController.actualizar)
router.patch('/activar', MapaController.activar)
router.patch('/desActivar', MapaController.desActivar)
router.delete('/eliminar', MapaController.eliminar)

export default router;

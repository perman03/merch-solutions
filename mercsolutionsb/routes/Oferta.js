import routerx from 'express-promise-router';
import OfertaController from '../controllers/OfertaController';
import auth from '../middlewares/authentication'

const router = routerx();

//Los middlewares se pasan como segundo argumento
//router.post('/agregar',  uploadcvFile, EventoController.agregar);
router.post('/agregar', [auth.verifyLogin, auth.verifyRH] ,OfertaController.agregar);
router.get('/buscar', OfertaController.buscar);
router.get('/listar', OfertaController.listar);
router.get('/listar/:id', OfertaController.listarId);
router.delete('/borrar/:id', [auth.verifyLogin, auth.verifyRH] ,OfertaController.borrar);
router.put('/actualizar/:id', OfertaController.actualizar);

export default router;
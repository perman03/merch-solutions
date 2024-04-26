import routerx from 'express-promise-router';
import componenteController from '../controllers/componenteController';
import auth from '../middlewares/authentication'

const router = routerx();

router.post('/agregar', [auth.verifyLogin, auth.verifyMedia], componenteController.agregar);
router.post('/agregarSubitem', [auth.verifyLogin, auth.verifyMedia], componenteController.agregarSubcomponente);
router.get('/listar', [auth.verifyLogin, auth.verifyMedia], componenteController.listar);
router.get('/listarUno', [auth.verifyLogin, auth.verifyMedia], componenteController.listarUno);
router.delete('/remover', [auth.verifyLogin, auth.verifyMedia], componenteController.remover);

export default router;
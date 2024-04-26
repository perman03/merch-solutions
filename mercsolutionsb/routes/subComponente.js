import routerx from 'express-promise-router';
import subComponenteController from '../controllers/subComponenteController';
import auth from '../middlewares/authentication'

const router = routerx();

router.post('/agregar', [auth.verifyLogin, auth.verifyMedia] , subComponenteController.agregar);
router.post('/agregarImagen', [auth.verifyLogin, auth.verifyMedia] , subComponenteController.agregarImagen);
router.post('/agregarSubtitulo', [auth.verifyLogin, auth.verifyMedia] , subComponenteController.agregarSubtitulo);
router.post('/agregarTexto', [auth.verifyLogin, auth.verifyMedia] , subComponenteController.agregarTexto);
router.get('/listar', [auth.verifyLogin, auth.verifyMedia] , subComponenteController.listar);
router.get('/listarUno', [auth.verifyLogin, auth.verifyMedia] , subComponenteController.listarUno);
router.get('/remover',[auth.verifyLogin, auth.verifyMedia] ,  subComponenteController.removerSubcomponente);

export default router;
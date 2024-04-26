import routerx from 'express-promise-router';
import UsuarioController from '../controllers/UsuarioControler';
import auth from '../middlewares/authentication'

const router = routerx();


router.post('/agregar', UsuarioController.agregar);
router.delete('/archivar', [auth.verifyLogin, auth.verifyRH] , UsuarioController.archivar);
router.post('/actualizar', [auth.verifyLogin, auth.verifyRH] ,UsuarioController.actualizar);
router.post('/buscarUno', [auth.verifyLogin, auth.verifyRH] ,UsuarioController.buscarUno);
router.get('/listar', [auth.verifyLogin, auth.verifyRH]  ,UsuarioController.listar);

//El log in va sin middleware porque si no, como damos tokens xd
router.post('/login', UsuarioController.login);



export default router;
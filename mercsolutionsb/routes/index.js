import routerx from 'express-promise-router'
import componenteRouter from './componente'
import subComponenteRouter from './subComponente'
import eventoRouter from './Evento'
import usuarioRouter from './Usuario'
import solicitudRouter from './Solicitud'
import ofertaRouter from "./Oferta"
import mapaRouter from "./mapa"
import galeriaRouter from "./galeria"

const router=routerx();

router.use('/componente',componenteRouter);
router.use('/subComponente', subComponenteRouter);
router.use('/evento', eventoRouter);
router.use('/usuario', usuarioRouter);
router.use('/solicitud', solicitudRouter);
router.use('/oferta', ofertaRouter);
router.use('/mapa', mapaRouter);
router.use('/galeria', galeriaRouter);

export default router;
import tokenService from '../services/token'

export default {
    //Verificamos si el usuario hizo log in
    verifyLogin: async(req, res, next) => {
        if (!req.headers.token) {
            return res.status(404).send({
                message: 'No se recibió ningun token'
            });
        }
        const response = await tokenService.decode(req.headers.token);
        if (response.rol == 'ADMIN_ROL' || response.rol == 'RH_ROL' || response.rol == 'MEDIA_ROL') {
            next();
        } else {
            return res.status(403).send({
                message: 'No autorizado, debe estar loggeado'
            });
        }
    },

    //Verifica si el usuario es administrador
    verifyAdministrador: async(req, res, next) => {
        if (!req.headers.token) {
            return res.status(404).send({
                message: 'No token'
            });
        }
        const response = await tokenService.decode(req.headers.token);
        if (response.rol == 'ADMIN_ROL') {
            next();
        } else {
            return res.status(403).send({
                message: 'No autorizado, debes ser administrador'
            });
        }
    },
    //Verifica si el usuario es de Media o administrador
    verifyMedia: async(req, res, next) => {
        if (!req.headers.token) {
            return res.status(404).send({
                message: 'No token'
            });
        }
        const response = await tokenService.decode(req.headers.token);
        if (response.rol == 'ADMIN_ROL' || response.rol == 'MEDIA_ROL') {
            next();
        } else {
            return res.status(403).send({
                message: 'No autorizado, debes ser administrador o de Media'
            });
        }
    }, 

    //Verifica si el usuario es de RH o  administrador
    verifyRH: async(req, res, next) => {
        if (!req.headers.token) {
            return res.status(404).send({
                message: 'No token'
            });
        }
        const response = await tokenService.decode(req.headers.token);
        if (response.rol == 'ADMIN_ROL' || response.rol == 'RH_ROL') {
            next();
        } else {
            return res.status(403).send({
                message: 'No autorizado, debes ser administrador o de RH'
            });
        }
    }
    
}
function sessionIniciada (req, res, next){
    if(req.session.datosUsuarios){
        res.locals.hayUsuario = req.session.datosUsuarios
    }
    next()
}
module.exports = sessionIniciada;
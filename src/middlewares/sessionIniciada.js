var sessionIniciada = function sessionActiva (req, res, next){
    if(req.session.datosUsuarios){
    res.locals.hayUsuario = req.session.datosUsuarios
    //console.log(req.session.datosUsuarios)
        }
    next();
};


module.exports = sessionIniciada
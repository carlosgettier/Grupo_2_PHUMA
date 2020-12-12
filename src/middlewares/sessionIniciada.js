function sessionIniciada (req, res, next){
    if(req.session.datosUsuarios){
    res.locals.hayUsuario = req.session.datosUsuarios
    //console.log(req.session.datosUsuarios)
    } else {
        console.log("No hay session iniciada")
    }
    next();
};


module.exports = sessionIniciada
var adminMW = function(req, res, next) {
  if (res.locals.hayUsuario.email == "admin@admin.com") {
    return next();
}
console.log(req.session.emails)
return res.redirect('/');
  };

module.exports =  adminMW
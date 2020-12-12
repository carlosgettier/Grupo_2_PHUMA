var adminMW = function(req, res, next) {
    if (req.session.email == "admin@admin.com"){
      return next();
     }else{
      return res.sendStatus(401)
     };
  };

module.exports =  adminMW
function cookieMW (req, res, next) {
    next ();
if(res.cookie.recordame != undefined && req.session.datosUsuarios == undefined)

for(let i = 0; i < usuarios.length; i++) {
    if(emailuser == req.cookie.recordame) {
        if(bcryptjs.compareSync(passwordLogin, usuarios[i].password)){

            req.session.datosUsuarios = {
                name: usuarios[i].name,
                email: usuarios[i].email
            }
        }
    }
}
};
module.exports = cookieMW ;
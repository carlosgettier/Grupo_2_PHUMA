const fs = require('fs');
const path = require('path');
const bcryptjs = require('bcryptjs');
const users = require('../validators/users');
const db = require("../database/models")
//let usuarios = fs.readFileSync(path.join(__dirname, '../database/users.json'), 'utf8');
//usuarios = JSON.parse(usuarios);

module.exports = {
    register: function (req, res) {
        res.render('users/register')
    },
    save: function (req, res) {

        db.user.create({
            nombre: req.body.name,
            imagen: req.file.filename,
            email: req.body.email,
            password: bcryptjs.hashSync(req.body.password, 12),
            repassword: bcryptjs.hashSync(req.body.repassword, 12)
        })
            .then(function (hola) {
                res.redirect("/")
            })
        /*.catch(function(error){
            res.send(error)
        })*/
    },

    login: function (req, res) {
        res.render('users/login')
    },
    checklogin: function (req, res) {
        db.user.findAll({
            where: {
                email: req.body.email,
            }
        })
            .then(function (respuesta) {
                //res.send(respuesta)

                if (req.body.email == respuesta[0].email) {
                    req.session.datosUsuarios = {
                        name: respuesta[0].nombre,
                        email: respuesta[0].email,
                        imagen: respuesta[0].imagen
                    }
                }
                if (req.body.recordame != undefined) {
                    res.cookie("Recordame", datosUsuarios.email, { maxAge: 60000 })
                }
                if (req.session.redirectTo) {
                    return res.redirect(req.session.redirectTo)
                } else {
                    return res.redirect("/")
                }

            }).catch(function (error) {
                res.render("users/register")
            })



    },
    logout: function (req, res) {
        req.session.destroy();
        res.redirect('/')
    },
    admi: function (req, res) {
        res.render('users/admi')
    }
}
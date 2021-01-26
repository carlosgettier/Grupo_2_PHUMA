const fs = require('fs');
const path = require('path');
const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator');
const { nextTick } = require('process');
const users = require('../validators/users');
const db= require("../database/models")
let usuarios = fs.readFileSync(path.join(__dirname, '../database/users.json'), 'utf8');
usuarios = JSON.parse(usuarios);

module.exports = {
    register: function(req, res) {
        res.render('users/register')
    },
    save: function(req, res) {
         db.user.create({
        nombre:req.body.name,
        imagen: req.file.filename,
        email:req.body.email,
        password: bcryptjs.hashSync(req.body.password, 12),
        repassword:bcryptjs.hashSync(req.body.repassword, 12)
       }).then(function(usuario){
           res.redirect("/")
       })
        
    },   
















    
    login: function(req, res) {
        res.render('users/login')
    },
    checklogin: function (req, res) {
        let emailuser = req.body.email;
        let passwordLogin = req.body.password;

        for(let i = 0; i < usuarios.length; i++) {
            if(emailuser == usuarios[i].email) {
                if(bcryptjs.compareSync(passwordLogin, usuarios[i].password)){

                    req.session.datosUsuarios = {
                        name: usuarios[i].name,
                        email: usuarios[i].email
                    };
                    if(req.body.recordame != undefined){
                        res.cookie ('Recordame', datosUsuarios.email, { maxAge: 60000   })
                    }
                    if(req.session.redirectTo){
                        return res.redirect(req.session.redirectTo)
                    } else {
                        return res.redirect('/')
                    }
                }else {
                res.send("El usuario no existe")
            }
            
            }
        }
    },
    logout: function (req, res) {
        req.session.destroy();
        res.redirect('/')
    },
    admi: function(req, res) {
        res.render('users/admi')
    }
}
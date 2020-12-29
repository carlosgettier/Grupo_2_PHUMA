const fs = require('fs');
const path = require('path');
const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator');
const { nextTick } = require('process');
const users = require('../validators/users');

let usuarios = fs.readFileSync(path.join(__dirname, '../database/users.json'), 'utf8');
usuarios = JSON.parse(usuarios);

module.exports = {
    register: function(req, res) {
        res.render('users/register')
    },
    save: function(req, res) {
        let nuevoUsuario = {
            name: req.body.name,
            email: req.body.email,
            avatar: req.file.filename,
            password: bcryptjs.hashSync(req.body.password, 12)
        }
        usuarios.push(nuevoUsuario)
        fs.writeFileSync(path.join(__dirname, '../database/users.json'), JSON.stringify(usuarios, null, 4));
        res.redirect('/')
        //let errors = validationResult(req);
        
        
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
                    res.redirect('/')

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
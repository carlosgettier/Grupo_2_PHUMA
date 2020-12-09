const fs = require('fs');
const path = require('path');
const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator');

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
    }
}
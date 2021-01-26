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
      })
    .then(function(hola){
          res.redirect("/")
       })
       .catch(function(error){
           res.send(error)
       }) 
    },
















    
    login: function(req, res) {
        res.render('users/login')
    },
    checklogin: function (req, res) {
        let emailuser = req.body.email;
        let passwordLogin = req.body.password;
        
        db.user.findAll({
            where: {
                email : emailuser,
                password : passwordLogin
            }
        })
        .then(function (respuesta){
            
              req.session.datosUsuarios = respuesta
              console.log(datosUsuarios)

            })
            
            
            
            .catch(function(error){
                req.send("El usuario no existe")
          })

            //if(req.body.recordame != undefined){
                   //res.cookie ('Recordame', respuesta.email, { maxAge: 60000   })
       // }
      //  if(req.session.redirectTo){
                    //    return res.redirect(req.session.redirectTo)
                  //  } else {
                       // return res.redirect('/')
                    
                    //}
               // }
       // )
            
    },
    logout: function (req, res) {
        req.session.destroy();
        res.redirect('/')
    },
    admi: function(req, res) {
        res.render('users/admi')
    }
}
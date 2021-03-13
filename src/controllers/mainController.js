const path = require('path');
const db = require('../database/models');

let mainController = {
    index: function(req, res) {

        db.product.findAll({
            include: [
                { association: 'imagenes' },
                { association: 'imagenPrincipal' },
                { association: 'proSexo' }
            ]
        }).then(function(todos){
            
            return res.render("home", {todos:todos})
        })
    },

    hombres: function(req,res){

        db.product.findAll({
            include: [
                { association: 'imagenes' },
                { association: 'imagenPrincipal' }
            ],
            where:{
                id_sexo : 1
            }
        })
        .then(function(hombres){
            res.render("hombres", {hombres:hombres})
        })
    },
    mujeres: function(req,res){

        db.product.findAll({
            include: [
                { association: 'imagenes' },
                { association: 'imagenPrincipal' }
            ],
            where:{
                id_sexo : 2
            }
        })
        .then(function(mujeres){
            res.render("mujeres", {mujeres:mujeres})
        })
    }
};

module.exports = mainController;
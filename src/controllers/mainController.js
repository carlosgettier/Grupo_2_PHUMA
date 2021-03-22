const path = require('path');
const db = require('../database/models');

let mainController = {
    index: function(req, res) {
        
        let hombres=  db.product.findAll({
            include: [
                { association: 'imagenes' },
                { association: 'imagenPrincipal' },
                { association: 'proSexo' }
            ],
            where:{

                id_sexo : 1,
                status : 1
            },
            order:[["id_producto", "DESC"]]
        })
        let mujeres = db.product.findAll({
            include: [
                { association: 'imagenes' },
                { association: 'imagenPrincipal' },
                { association: 'proSexo' }
            ],
            where:{
                id_sexo : 2,
                status : 1
            },
            order:[["id_producto", "DESC"]]
        })

        Promise.all([hombres, mujeres]).then(
            function (resultados){
                return res.render("home", {hombres:resultados[0], mujeres:resultados[1]} )
            }
        )
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
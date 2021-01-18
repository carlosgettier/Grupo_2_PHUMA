const path = require('path');

let mainController = {
    index: function(req, res) {
        return res.render('home', {
            mensaje: "Bienvenidos a nuestra página"
        });
    },
    hombres: function(req,res){
        res.render("hombres")
    },
    mujeres:function(req,res){
        res.render("mujeres")
    },
    niños:function(req,res){
        res.render("ninios")
    }
};

module.exports = mainController;
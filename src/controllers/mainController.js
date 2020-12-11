const path = require('path');

let mainController = {
    index: function(req, res) {
        return res.render('home', {
            mensaje: "Bienvenidos a nuestra página"
        });
    }
};

module.exports = mainController;
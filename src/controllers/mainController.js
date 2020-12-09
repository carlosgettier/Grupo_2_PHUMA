const path = require('path');

let mainController = {
    index: function(req, res) {
        return res.render('home');
    }
};

module.exports = mainController;
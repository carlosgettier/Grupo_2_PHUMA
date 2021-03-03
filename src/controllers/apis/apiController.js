const path = require('path');
const db= require("../../database/models")
const Sequelize = require('sequelize');

module.exports = {
    users: function(req, res) {
       
       
            db.user.findAll({
                attributes:[["id_usuario","id"],
                            ["nombre","nombre"],
                            ["email","email"],
                            [Sequelize.fn('CONCAT',"/api/users/", Sequelize.col('id_usuario') ),'detail']

                        ]
            }).then(function (usuarios){
               let respuestaFormateada = { datos:usuarios,
                cuenta:usuarios.length}

                return res.json(respuestaFormateada)
        })
       
    }
}

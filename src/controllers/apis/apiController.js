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
                cantidad:usuarios.length}

                return res.json(respuestaFormateada)
        })
       
    },
    detail: function (req,res){
        db.user.findByPk(req.params.id).then(function (usuario){
            res.json({"nombre" : usuario.nombre,
            "email" : usuario.email,
            "imagen" : "/api/users/img/" + usuario.id_usuario
        })
        }).catch(function (error){
            res.send("El usuario solicitado no existe")
        })
    },
    imagen: function (req,res){
        db.user.findByPk(req.params.id).then( function (imagen){
           
            res.render('users/img',{imagen: imagen.imagen})
        })

            
        
    },
    /*=========PRODUCTOS=========*/ 
    products: function(req, res) {
       
       
        db.product.findAll({
            attributes:[["id_producto","id"],
                        ["nombre","nombre"],
                        ["descripcion","descripcion"],
                        ["precio","precio"],
                        [Sequelize.fn('CONCAT',"/api/products/", Sequelize.col('id_producto') ),'detail']

                    ]
        }).then(function (producto){
           let respuestaFormateada = { Productos:producto,
            cantidad:producto.length}

            return res.json(respuestaFormateada)
    })
   
},
productDetail: function (req,res){
    db.product.findByPk(req.params.id).then(function (producto){
        res.json({"nombre" : producto.nombre,
        "descripcion" : producto.descripcion,
        "cantidad" : producto.cantidad,
        "sexo" : producto.id_sexo,
        "nombre" : producto.nombre,
        "imagen" : "/api/products/img/" + producto.id_imagen_principal
    })
    }).catch(function (error){
        res.send("El Producto solicitado no existe")
    })
},
productImagen: function (req,res){
    db.product.findByPk(req.params.id).then( function (imagen){
       
        res.render('users/img',{imagen: imagen.id_imagen_principal})
    })

        
    
}
}

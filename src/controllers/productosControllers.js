const { Console } = require('console');
const fs = require('fs');
const path = require('path')
const db = require("../database/models")
const { Op } = require("sequelize");

let databaseProducts = fs.readFileSync(path.join(__dirname, '..', 'database', 'productos.json'));

databaseProducts = JSON.parse(databaseProducts);

let mezclar = function (productos, cantidad) {

    let productosSeleccionados = []
    let todosLosProductos = []
    productos.forEach(esteProducto => todosLosProductos.push(esteProducto))
    for (let i = 0; i < cantidad; i++) {
        if (todosLosProductos.length >= 1) {
            //min incluido: 0, max excluido length
            let aleatorio = Math.floor(Math.random() * (todosLosProductos.length));
            productosSeleccionados.push(todosLosProductos[aleatorio])
            todosLosProductos.splice(aleatorio, 1)
        }
    }

    return productosSeleccionados

}

let prepararRegistrosDeFotosSecundarias = function (req, idProducto) {
    if (req.files.rutaImagenesSecundarias) {
        let arrayImagenes = []
        req.files.rutaImagenesSecundarias.forEach(estaImagen => {
            arrayImagenes.push(
                {
                    rutaImagen: estaImagen.filename,
                    product_id: idProducto,
                    status: 1
                }
            )
        })
        return arrayImagenes
    }
}

let prepararRegistroDeFotoPrincipal = function (req, idProducto) {
    if (req.files.rutaALaImagen) {
        return {
            rutaImagen: req.files.rutaALaImagen[0].filename,
            product_id: idProducto,
            status: 1
        }
    }
}

let prepararRegistroDeProducto = function (req) {
    //funco la insercion de talles de un solo tiron!!!
    //pendiente agregarlo para las fotos
    let arrayDeTalles = [];

    console.log(req.body.talles);

    if (req.body.talles) {
        if (!Array.isArray(req.body.talles)) {
            arrayDeTalles.push({ id_talle: req.body.talles })
        } else {
            req.body.talles.forEach(talle => {
                arrayDeTalles.push({ id_talle: talle })
            })
        }

    }

    return {
        nombre: req.body.nombre,
        descripcion: req.body.description,
        id_categoria: req.body.category,
        id_sexo: req.body.sexo,
        id_marca: req.body.marca,
        precio: req.body.precio,
        tallesDeProducto: arrayDeTalles,
        status: 1
    }
}

module.exports = {
    'all': async function (req, res) {
        try {
            let productos = await db.product.findAll({
                where: {
                    status: 1
                },
                include: [
                    { association: 'imagenes' },
                    { association: 'imagenPrincipal' }
                ]
            });
            res.render('products/productsAll', { tilesDeProducto: productos });
        } catch (err) {
            console.log(err)
            res.send('Algo salio mal XP');
        }
    },
    "carrito": function (req, res) {
        res.render("products/carrito")
    },
    "detalle": async function (req, res) {
        try {
            let producto = await db.product.findByPk(req.params.id, {
                include: [
                    { association: 'imagenes' },
                    { association: 'imagenPrincipal' },
                    { association: 'proCateg' },
                    { association: 'talles' }]
            });

            let productosParaTiles = await db.product.findAll({
                where: {
                    id_producto: {
                        [Op.not]: req.params.id
                    },
                    status: 1
                },
                include: [
                    { association: 'imagenes' },
                    { association: 'imagenPrincipal' }
                ]
            });

            let mezcla = mezclar(productosParaTiles, 3);

            //res.send(producto)
            res.render("products/detalleDeProducto", { producto: producto, tilesDeProducto: mezcla })
        } catch (err) {
            console.log(err)
            res.send('Algo salio mal XP');
        }
    },
    "add": function (req, res) {
        //not deleted
        const talles_pro = db.talle.findAll();
        const categorias_pro = db.categoria.findAll();
        const sexos_pro = db.sexo.findAll();
        const marcas_pro = db.marca.findAll();

        Promise.all([talles_pro, categorias_pro, sexos_pro, marcas_pro]).then(resultados => {
            res.render("products/addProduct",
                {
                    talles: resultados[0],
                    categorias: resultados[1],
                    sexos: resultados[2],
                    marcas: resultados[3]
                })
        }).catch(reason => {
            console.log(reason)
            res.send('Algo salio mal XP: ' + reason)
        });




    },

    "save": async function (req, res) {
        let nuevoProducto = prepararRegistroDeProducto(req)
        console.log(nuevoProducto);

        try {
            const productoNuevo = await db.product.create(nuevoProducto,
                { include: [{ model: db.talle_de_producto, as: 'tallesDeProducto' }] }
            );
            let imagenesSecundarias = prepararRegistrosDeFotosSecundarias(req, productoNuevo.id_producto);
            let imagenPrincipal = prepararRegistroDeFotoPrincipal(req, productoNuevo.id_producto);
            if (imagenesSecundarias) {
                await db.imagenes.bulkCreate(imagenesSecundarias);
            }
            if (imagenPrincipal) {
                const imagenePrin = await db.imagenes.create(imagenPrincipal);
                await db.product.update(
                    { id_imagen_principal: imagenePrin.idimagenes },
                    { where: { id_producto: productoNuevo.id_producto } }
                )
            }
            return res.redirect('/products/addProduct')
        } catch (err) {
            console.log(err)
            res.send('Algo salio mal XP');
        }
    },
    "confirmDelete": function (req, res) {
        db.product.findByPk(req.params.id)
            .then(function (producto) {
                res.render("products/formularioBorradoProducto", { producto: producto })

            })
    },
    "deleteId": function (req, res) {
        db.product.update({
            status: 0
        },
            {
                where: {
                    id_producto: req.params.id
                }
            }
        )
            .then(function (hola) {
                res.redirect("/products")
            })

    },
    "edit": function (req, res) {
        db.product.findByPk(req.params.id)
            .then(function (productos) {
                //res.send(productos)
                res.render("products/productsEdit", { producto: productos })
            })

            .catch(function (error) {
                res.send(error)
            })
    },
    "listo": function (req, res) {
        db.product.update({
            nombre: req.body.name,
            cantidad: req.body.name,
            descripcion: req.body.description,
            id_categoria: req.body.category,
            id_sexo: req.body.sexo,
            id_marca: req.body.marca,
            precio: req.body.precio
        },
            {
                where: {
                    id_producto: req.params.id
                }
            }
        )
            .then(function (hola) {
                res.redirect("/products")
            })
            .catch(function (error) {
                res.send(error)
            })
        db.imagenes.update({
            rutaImagen: req.file.filename
        },
            {
                where: {
                    idimagenes: req.params.id

                }
            }
        ).then(function (hola) {
            res.redirect("/products")
        })
    }
}
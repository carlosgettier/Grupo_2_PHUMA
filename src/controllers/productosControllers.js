const { Console } = require('console');
const fs = require('fs');
const path = require('path')
const db= require("../database/models")
const { Op } = require("sequelize");

let databaseProducts = fs.readFileSync(path.join(__dirname, '..', 'database', 'productos.json'));

databaseProducts = JSON.parse(databaseProducts);

let mezclar = function (productos, cantidad){

    let productosSeleccionados = []
    let todosLosProductos = []
    productos.forEach(esteProducto=>todosLosProductos.push(esteProducto))
    for(let i = 0 ; i < cantidad ; i++){
        if(todosLosProductos.length >= 1){
            //min incluido: 0, max excluido length
            let aleatorio = Math.floor(Math.random() * (todosLosProductos.length));
            productosSeleccionados.push(todosLosProductos[aleatorio])
            todosLosProductos.splice(aleatorio, 1)
        }
    }

    return productosSeleccionados

}

module.exports = {
    'all': async function (req, res) {
    try{
        let productos = await db.product.findAll({
            include: [
                {association:'imagenes'},
                {association:'imagenPrincipal'}
            ]
        });
        res.render('products/productsAll', { tilesDeProducto:productos}); 
    } catch (err){
        console.log(err)
        res.send('Algo salio mal XP');  
    }     
    },
    "carrito": function (req, res) {
        res.render("products/carrito")
    },
    "detalle": async function (req, res) {

        try{
            let producto = await db.product.findByPk(req.params.id,{
                include: [
                    {association:'imagenes'},
                    {association:'imagenPrincipal'},
                    {association:'proCateg'},
                    {association:'produTalle'}]
            });

            let productosParaTiles = await db.product.findAll({
                where: {
                    id_producto: {
                        [Op.not]: req.params.id
                    }
                },
                include: [
                    {association:'imagenes'},
                    {association:'imagenPrincipal'}
                ]
            });

            let mezcla = mezclar (productosParaTiles, 3);
            
           console.log(producto)
            res.render("products/detalleDeProducto", { producto: producto, tilesDeProducto: mezcla})
        } catch (err){
            console.log(err)
            res.send('Algo salio mal XP');  
        }
    },
    "add": function (req, res) {
        res.render("products/addProduct")
    },

    "save": async function(req, res) {

        let nuevoProducto = {
            //id: ultimoId + 1,
            nombre: 'preuba desde node',
            descripcion: 'esta es una descripcion',
            id_marca: '1',
            id_categoria: '1',
            status: '1',
            id_sexo: '1',
            //rutaALaImagen: req.file.filename,
            //categoria: req.body.category,
            //talle: req.body.talle.toUpperCase().split(","),
            precio: '12345',
        }

        try{
        const productoNuevo = await db.product.create(nuevoProducto);
        console.log(productoNuevo.id_producto);
        res.redirect('/')
        } catch (err) {
            console.log(err)
            res.send('Algo salio mal XP');  
        }
        //let errors = validationResult(req);
    },
    "carganode": async function(req, res) {
            let nuevoProducto = {
              //id: ultimoId + 1,
              nombre: 'preuba desde node',
              descripcion: 'esta es una descripcion',
              id_marca: 1,
              id_categoria: 1,
              status: 1,
              id_sexo: 1,
              cantidad: 1,
              //rutaALaImagen: req.file.filename,
              //categoria: req.body.category,
              //talle: req.body.talle.toUpperCase().split(","),
              precio: 12345,
          }
          
          try{
          const productoNuevo = await db.product.create(nuevoProducto);
          console.log(productoNuevo.id_producto);
          res.redirect('/')
          } catch (err) {
              console.log(err)
              res.send('Algo salio mal XP');  
          }
    },



















    
    "confirmDelete": function (req, res){
        let id = req.params.id
        if (!dataBase.productById(id).error){
            return res.render("products/formularioBorradoProducto", {producto: dataBase.productById(id)})
        } else {
            return res.send(dataBase.productById(id).error)
        }
    },

    "deleteId": function (req, res){
        dataBase.borrarProductById(req.params.id)
        res.redirect('/products/')
    },
    "edit": function(req,res){
        db.product.findAll()
        .then((respuesta)=>{
            res.render("/product/")
        })
        .catch (function(error){
            res.send(error)
        })
    },
    "listo": function(req,res){
      db.product.update({
          nombre:req.body.name,
          cantidad:req.body.name,
          descripcion:req.body.description,
          id_categoria:req.body.category,
          id_sexo:req.body.sexo,
          id_marca:req.body.marca,
          precio:req.body.precio
      },
      {
          where:{
              id_producto:req.params.id
               }
      }
      )
      .then(function(hola){
        res.redirect("/")
      })
      .catch (function(error){
          res.send(error)
      })

       
    }
}
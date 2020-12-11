const fs = require ('fs');
const path = require ('path')

let databaseProducts = fs.readFileSync(path.join(__dirname,'..','database','productos.json'));

databaseProducts = JSON.parse(databaseProducts);

module.exports = {
    'all': function (req, res) {
        res.render('products/productsAll',{ tilesDeProducto: databaseProducts})
    },
    "carrito" : function (req, res){
        res.render("products/carrito")
    },
    "detalle" : function (req,res){
        res.render("products/detalleDeProducto")
    },
    "add" : function (req,res){
        res.render("products/addProduct")  
    }//*****Test de push******
}
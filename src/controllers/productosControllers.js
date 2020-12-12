const fs = require('fs');
const path = require('path')

let databaseProducts = fs.readFileSync(path.join(__dirname, '..', 'database', 'productos.json'));

databaseProducts = JSON.parse(databaseProducts);

let dataBase = {

    allProducts () {

        let databaseProducts = fs.readFileSync(path.join(__dirname, '..', 'database', 'productos.json'));

        databaseProducts = JSON.parse(databaseProducts);

        return databaseProducts;

    },


    productById (id){

        if(this.allProducts().filter(esteProducto => esteProducto.id == id).length !=1){
            console.log('cagamo');
            return {error:'Algo salio mal'}

        } else {
            return this.allProducts().filter(esteProducto => esteProducto.id == id)[0];
        }
    },

    arrayRandomTiles (cantidad) {

        let productosSeleccionados = []
        let todosLosProductos= this.allProducts()
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
}




module.exports = {
    'all': function (req, res) {
        res.render('products/productsAll', { tilesDeProducto: dataBase.allProducts() })
    },


    "carrito": function (req, res) {
        res.render("products/carrito")
    },


    "detalle": function (req, res) {
        let id = req.params.id
        if (!dataBase.productById(id).error){
            return res.render("products/detalleDeProducto", { producto: dataBase.productById(id), tilesDeProducto: dataBase.arrayRandomTiles('3') })
        } else {
            return res.send(dataBase.productById(id).error)
        }
        
    },


    "add": function (req, res) {
        res.render("products/addProduct")
    }
}
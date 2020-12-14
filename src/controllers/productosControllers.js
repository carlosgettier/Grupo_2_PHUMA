const { Console } = require('console');
const fs = require('fs');
const path = require('path')

let databaseProducts = fs.readFileSync(path.join(__dirname, '..', 'database', 'productos.json'));

databaseProducts = JSON.parse(databaseProducts);

let dataBase = {

    rutaAlArchivo: path.join(__dirname, '..', 'database', 'productos.json'),

    allProducts () {

        let databaseProducts = fs.readFileSync(this.rutaAlArchivo);

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
    },

    borrarProductById (id){
        let arrayProductoBorrado= this.allProducts().filter(esteProducto => esteProducto.id != id)
        fs.writeFileSync(this.rutaAlArchivo, JSON.stringify(arrayProductoBorrado, null, 4))
    }
}

let ultimoId = 0;
for(let i = 0; i < databaseProducts.length; i++) {
    if(ultimoId < databaseProducts[i].id) {
        ultimoId = databaseProducts[i].id
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
    },

    "save": function(req, res) {

        let nuevoProducto = {
            id: ultimoId + 1,
            nombre: req.body.nombre,
            description: req.body.description,
            rutaALaImagen: req.file.filename,
            categoria: req.body.category,
            talle: req.body.talle.toUpperCase().split(","),
            precio: req.body.precio,
        }
        databaseProducts.push(nuevoProducto)
        fs.writeFileSync(path.join(__dirname, '../database/productos.json'), JSON.stringify(databaseProducts, null, 4));
        res.redirect('/')
        //let errors = validationResult(req);
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
        let idProducts= req.params.id;
         let productsToEdit= databaseProducts.filter(producto => (producto.id == idProducts))
         res.render("products/productsEdit",{productsToEdit:productsToEdit[0]});
    },
    "listo": function(req,res){
       
        for(producto of databaseProducts){
            if(producto.id== req.params.id){
                producto.nombre=req.body.name
                producto.description= req.body.description
                producto.categoria= req.body.category
                producto.talle=req.body.talle.toUpperCase().split(",")
                producto.precio= req.body.precio
                 if(req.file ){
                  producto.rutaALaImagen = req.file.filename
                  /*aca se debe guardar el archivo*/
                 } 


            }
        } fs.writeFileSync(path.join(__dirname, '../database/productos.json'), JSON.stringify(databaseProducts, null, 4));
        res.redirect('/')
       
    }
}
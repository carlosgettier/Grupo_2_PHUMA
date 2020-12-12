const fs = require('fs');
const path = require('path')

let databaseProducts = fs.readFileSync(path.join(__dirname, '..', 'database', 'productos.json'));

databaseProducts = JSON.parse(databaseProducts);

let producto = {
    "id": "1",
    "nombre": "zapatilla 1",
    "descripcion": "desc 1",
    "categoria": "remeras",
    "precio": "$10000",
    "talles": [32, 33, 37],
    "rutaALaImagen": "zapatilla1.jpg",
    "tecnologias": "brabsadasd asddjsa pjpajsd adsdadpoasd poajsdpo japo djpoajdpoja spodj apojdspoapodj poajs dpoaj dposj aposjdpo ajsdpo japosdj poajsdpo ajsdpoj aposdj poajsdpo japosdj poasdj poajsdpo japosd jpoasdj poajsdpo "
};

let arrayTiles = [
    {"id":"1","nombre":"zapatilla 1", "descripcion":"desc 1","precio":"$10000","rutaALaImagen":"zapatilla1.jpg"},
    {"id":"2","nombre":"zapatilla 2", "descripcion":"desc 2","precio":"$12000","rutaALaImagen":"zapatilla2.jpg"},
    {"id":"3","nombre":"zapatilla 3", "descripcion":"desc 3","precio":"$5000","rutaALaImagen":"zapatilla3.jpg"}
];




module.exports = {
    'all': function (req, res) {
        res.render('products/productsAll', { tilesDeProducto: databaseProducts })
    },
    "carrito": function (req, res) {
        res.render("products/carrito")
    },
    "detalle": function (req, res) {
        res.render("products/detalleDeProducto", { producto: producto, tilesDeProducto: arrayTiles })
    },
    "add": function (req, res) {
        res.render("products/addProduct")
    }
}
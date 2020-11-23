let databaseProducts = [
    {"id":"1","nombre":"zapatilla 1", "descripcion":"desc 1","precio":"$10000","rutaALaImagen":"/imagenesProductosDatabase/zapatilla1.jpg"},
    {"id":"2","nombre":"zapatilla 2", "descripcion":"desc 2","precio":"$12000","rutaALaImagen":"/imagenesProductosDatabase/zapatilla2.jpg"},
    {"id":"3","nombre":"zapatilla 3", "descripcion":"desc 3","precio":"$5000","rutaALaImagen":"/imagenesProductosDatabase/zapatilla3.jpg"},
    {"id":"4","nombre":"zapatilla 4", "descripcion":"desc 4","precio":"$70000","rutaALaImagen":"/imagenesProductosDatabase/zapatilla4.jpg"}
];

module.exports = {
    'all': function (req, res) {
        res.render('products/productsAll',{ tilesDeProducto: databaseProducts})
    }
}
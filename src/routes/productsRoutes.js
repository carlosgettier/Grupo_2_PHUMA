const express = require ('express');
const path = require('path');
const router = express.Router();
const productosControllers = require(path.join(__dirname,'..','controllers','productosControllers.js'))


router.get('/',productosControllers.all)

router.get("/carrito", productosControllers.carrito)
router.get("/detalleDeProducto", productosControllers.detalle)
router.get("/addProduct", productosControllers.add)


module.exports = router;
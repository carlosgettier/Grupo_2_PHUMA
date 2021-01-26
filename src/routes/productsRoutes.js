const multer = require('multer');
const express = require ('express');
const path = require('path');
const router = express.Router();
const productosControllers = require(path.join(__dirname,'..','controllers','productosControllers.js'))
const adminMW = require('../middlewares/adminMW')
const sessionIniciada = require('../middlewares/sessionIniciada')
const verificaInicioSession = require(path.join(__dirname,'..','middlewares','verificaInicioSession.js'))

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname, '../../public/uploads/productImage'));
    },
    filename: function (req, file, cb) {
        console.log()
        cb(null, req.body.name + '-' + Date.now() + path.extname(file.originalname))
    }
})
   
var upload = multer({ storage: storage })

router.get('/',productosControllers.all)

router.get("/carrito",verificaInicioSession, productosControllers.carrito);
router.get("/detalleDeProducto/:id", productosControllers.detalle);
router.get("/addProduct", sessionIniciada ,adminMW ,productosControllers.add);
router.post('/addProduct', upload.single('rutaALaImagen'), sessionIniciada ,adminMW ,productosControllers.save);
router.get("/delete/:id", adminMW ,productosControllers.confirmDelete);
router.delete("/delete/:id",sessionIniciada ,adminMW ,productosControllers.deleteId);
router.get("/edit/:id",adminMW,productosControllers.edit)
router.put("/edit/:id",upload.single('rutaALaImagen'),productosControllers.listo)

module.exports = router;
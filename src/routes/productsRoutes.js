const multer = require('multer');
const express = require ('express');
const path = require('path');
const router = express.Router();
const productosControllers = require(path.join(__dirname,'..','controllers','productosControllers.js'))
const adminMW = require('../middlewares/sessionIniciada')

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

router.get("/carrito", productosControllers.carrito);
router.get("/detalleDeProducto/:id", productosControllers.detalle);
router.get("/addProduct",adminMW ,productosControllers.add);
router.post('/addProduct',upload.single('rutaALaImagen'), adminMW ,productosControllers.save);
router.get("/delete/:id", productosControllers.confirmDelete);
router.delete("/:id", productosControllers.deleteId);

module.exports = router;
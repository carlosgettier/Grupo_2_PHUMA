const express = require('express');
const router = express.Router()

const apiController = require('../controllers/apis/apiController')

/* ============== USERS ================ */ 
router.get('/users', apiController.users)
router.get('/users/:id', apiController.detail)
router.get('/users/img/:id', apiController.imagen)

/* ============== PRODUCTS ================ */ 
router.get('/products', apiController.products)
router.get('/products/:id', apiController.productDetail)
router.get('/products/img/:id', apiController.productImagen)



module.exports = router;
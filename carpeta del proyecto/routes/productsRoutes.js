const express = require ('express');
const path = require('path');
const router = express.Router();
const productosControllers = require(path.join(__dirname,'..','controllers','productosControllers.js'))


router.get('/',productosControllers.all)


module.exports = router;
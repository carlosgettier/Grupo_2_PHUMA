const express = require('express');
const router = express.Router()

const mainController = require('../controllers/mainController')

router.get('/', mainController.index)
router.get("/hombres",mainController.hombres)
router.get("/mujeres",mainController.mujeres)


module.exports = router;
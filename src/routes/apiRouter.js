const express = require('express');
const router = express.Router()

const apiController = require('../controllers/apis/apiController')

router.get('/users', apiController.users)



module.exports = router;
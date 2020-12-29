const multer = require('multer');
const express = require('express');
const router = express.Router();
const path = require('path');
const usersController = require('../controllers/usersController');
const usersValidator = require('../validators/users');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname, '../../public/uploads/avatars'));
    },
    filename: function (req, file, cb) {
        console.log()
        cb(null, req.body.email + '-' + Date.now() + path.extname(file.originalname))
    }
})
   
var upload = multer({ storage: storage })

router.get('/register', usersController.register);
router.post('/register', upload.single('avatar'), usersValidator.checkRegister, usersController.save);

router.get('/login', usersController.login);
router.get('/logout', usersController.logout);
router.post('/login', usersController.checklogin);
router.get("/admi",usersController.admi)

module.exports = router;
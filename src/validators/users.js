const { check } = require('express-validator');

module.exports = {
    checkRegister: [
        check('name')
            .notEmpty().withMessage('Este campo es obligatorio').bail()
            .isLength({min: 6, max: 30}).withMessage('Tu nombre debe tener comomínimo 6 caracteres y como máximo 30 xD'),
        check('email')
            .isEmail()
            .withMessage('Tenés que poner un email válido')
    ],
    checkLogin: null
}
const {check} = require('express-validator');

module.exports = {
    
   checkRegister : [
        check('name')
            .notEmpty().withMessage('Este campo es obligatorio').bail()
            .isLength({min: 6, max: 30}).withMessage('Tu nombre debe tener como mínimo 6 caracteres y como máximo 30'),
        check('email')
            .notEmpty().withMessage('Este campo es obligatorio')
            .isEmail()
            .withMessage('Tenés que poner un email válido'),
        check("password")
            .isLength({min: 8}).withMessage('Tu contraseña debe tener como mínimo 8 caracteres')
            .notEmpty().withMessage('Este campo es obligatorio'),
        check("repassword")
            .isLength({min: 8}).withMessage('Tu contraseña debe tener como mínimo 8 caracteres y ser igual a la contraseña anterior')
            .notEmpty().withMessage('Este campo es obligatorio'),
        check("imagen")          
            .notEmpty().withMessage('Este campo es obligatorio')
    ],
    checkLogin: [ check("email")
                    .notEmpty().withMessage('Este campo es obligatorio')
                    .isEmail()
                    .withMessage('Tenés que poner un email válido'),
                check("password")
                .notEmpty().withMessage('Este campo es obligatorio')
    ]}

const { check } = require('express-validator');

module.exports = [
    check('name')
        .notEmpty()
        .withMessage('Debes completar el nombre')
        .bail(),
    check('description')
        .isLength({max: 500})
        .withMessage('La decripcion puede tener un maximo de 500 caracteres.')
        .bail(),
    check('price')
        .notEmpty()
        .withMessage('Debes poner un precio')
        .isFloat({min: 0.01, max:100_000_000})
        .bail(),
    check('discount')
        .notEmpty()
        .withMessage('Debes escoger un descuento.\nPuedes elegir "0"')
        .isFloat({min: 0, max:100})
        .withMessage('Debes elegir un porcentaje valido.')
        .bail(),
];
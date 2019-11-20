const { Router } = require('express');
const router = Router();
const { getProductos, getCategorias, createProductos, getProducto, deleteProducto, updeteProducto } = require('../controllers/productos.controllers');

router.route('/')
    .get(getProductos)
    .post(createProductos)

router.route('/categorias')
    .get(getCategorias);

router.route('/:id')
    .get(getProducto)
    .put(updeteProducto)
    .delete(deleteProducto);




module.exports = router;
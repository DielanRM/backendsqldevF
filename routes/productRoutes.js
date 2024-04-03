const express = require('express')
const router = express.Router()

const productController = require('../controllers/productController.js')

router.post('/products', productController.createProduct)
router.get('/products', productController.getAllProducts)
router.get('/products/:productId', productController.getOneProduct)
router.patch('/products/:productId', productController.updateOneProduct)
router.delete('/products/:productId', productController.deleteOneProduct)

module.exports = router

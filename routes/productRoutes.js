const express = require('express')
const router = express.Router()

const productController = require('../controllers/productController.js')

router.post('/products', productController.createProduct)
router.get('/products', productController.getAllProductProducts)

module.exports = router

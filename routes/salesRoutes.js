const express = require('express')
const router = express.Router()

const salesController = require('../controllers/salesController.js')

router.get('/sales', salesController.getAllSales)

module.exports = router

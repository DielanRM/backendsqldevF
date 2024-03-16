const expres = require('express')
const router = expres.Router()

const customerController = require('../controllers/customerController.js')

router.get('/customers', customerController.createCustomer)

module.exports = router

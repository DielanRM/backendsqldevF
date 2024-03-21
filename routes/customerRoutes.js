const expres = require('express')
const router = expres.Router()

const customerController = require('../controllers/customerController.js')

router.post('/customers', customerController.createCustomer)
router.get('/customers', customerController.getAllCustomers)

module.exports = router

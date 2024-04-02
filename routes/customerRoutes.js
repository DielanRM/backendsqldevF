const expres = require('express')
const router = expres.Router()

const customerController = require('../controllers/customerController.js')

router.post('/customers', customerController.createCustomer)
router.get('/customers', customerController.getAllCustomers)
router.get('/customers/:customerId', customerController.getOneCustomer)
router.patch('/customers/:customerId', customerController.updateCustomer)
router.delete('/customers/:customerId', customerController.deleteCustomer)

module.exports = router

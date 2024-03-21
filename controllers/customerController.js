const { create } = require('../models/Customers.js')

const createCustomer = (req, res) => {
  create(req.body)
    .then((customer) => {
      res.status(201).send(customer)
    })
    .catch((error) => {
      res.status(400).send({ msg: error })
    })
}

const getAllCustomers = (req, res) => {
  create(req.body)
    .then((customer) => {
      res.status(201).send(customer)
    })
    .catch((error) => {
      res.status(400).send({ msg: error })
    })
}

module.exports = { createCustomer, getAllCustomers }

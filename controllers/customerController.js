const { create, findAll, findOne, update } = require('../models/Customers.js')

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
  findAll()
    .then((customers) => {
      res.status(201).send(customers)
    })
    .catch((error) => {
      res.status(400).send({ msg: error })
    })
}

const getOneCustomer = (req, res) => {
  findOne(req.params.customerId)
    .then((customer) => {
      res.status(201).send(customer)
    })
    .catch((error) => {
      res.status(400).send({ msg: error })
    })
}

const updateCustomer = (req, res) => {
  update(req.params.customerId, req.body)
    .then((customer) => {
      res.status(201).send(customer)
    })
    .catch((error) => {
      res.status(400).send({ msg: error })
    })
}

module.exports = { createCustomer, getAllCustomers, getOneCustomer, updateCustomer }

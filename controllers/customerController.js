const { create, findAll, findOne, update, destroyData } = require('../models/Customers.js')

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
      res.status(200).send(customers)
    })
    .catch((error) => {
      res.status(400).send({ msg: error })
    })
}

const getOneCustomer = (req, res) => {
  findOne(req.params.customerId)
    .then((customer) => {
      res.status(200).send(customer)
    })
    .catch((error) => {
      res.status(400).send({ msg: error })
    })
}

const updateCustomer = (req, res) => {
  update(req.params.customerId, req.body)
    .then((customer) => {
      res.status(200).send(customer)
    })
    .catch((error) => {
      res.status(400).send({ msg: error })
    })
}

const deleteCustomer = (req, res) => {
  destroyData(req.params.customerId)
    .then(() => {
      res.status(204).send()
    })
    .catch((error) => {
      res.status(400).send({ msg: error })
    })
}

module.exports = {
  createCustomer,
  getAllCustomers,
  getOneCustomer,
  updateCustomer,
  deleteCustomer
}

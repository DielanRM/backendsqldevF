const { create, findAll } = require('../models/Products.js')

const createProduct = (req, res) => {
  create(req.body)
    .then((product) => {
      res.status(201).send(product)
    })
    .catch((error) => {
      res.status(400).send({ msg: error })
    })
}

const getAllProducts = (req, res) => {
  findAll()
    .then((products) => {
      res.status(201).send(products)
    })
    .catch((error) => {
      res.status(400).send({ msg: error })
    })
}

module.exports = { createProduct, getAllProducts }

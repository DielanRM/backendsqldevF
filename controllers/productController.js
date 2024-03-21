const { create } = require('../models/Products.js')

const createProduct = (req, res) => {
  create(req.body)
    .then((product) => {
      res.status(201).send(product)
    })
    .catch((error) => {
      res.status(400).send({ msg: error })
    })
}

const getAllProductProducts = (req, res) => {
  create(req.body)
    .then((product) => {
      res.status(201).send(product)
    })
    .catch((error) => {
      res.status(400).send({ msg: error })
    })
}

module.exports = { createProduct, getAllProductProducts }

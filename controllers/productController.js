const { create, findAll, findOne, updateProduct, destroyProduct } = require('../models/Products.js')

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
      res.status(200).send(products)
    })
    .catch((error) => {
      res.status(400).send({ msg: error })
    })
}

const getOneProduct = (req, res) => {
  findOne(req.params.productId)
    .then((products) => {
      res.status(200).send(products)
    })
    .catch((error) => {
      res.status(400).send({ msg: error })
    })
}

const updateOneProduct = (req, res) => {
  updateProduct(req.params.productId, req.body)
    .then((products) => {
      res.status(200).send(products)
    })
    .catch((error) => {
      res.status(400).send({ msg: error })
    })
}

const deleteOneProduct = (req, res) => {
  destroyProduct(req.params.productId)
    .then(() => {
      res.status(204).send()
    })
    .catch((error) => {
      res.status(400).send({ msg: error })
    })
}

module.exports = { createProduct, getAllProducts, getOneProduct, updateOneProduct, deleteOneProduct }

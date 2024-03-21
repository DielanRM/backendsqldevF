const { findAll } = require('../models/Sales.js')

const getAllSales = (req, res) => {
  findAll()
    .then((sales) => {
      res.status(201).send(sales)
    })
    .catch((error) => {
      res.status(400).send({ msg: error })
    })
}

module.exports = { getAllSales }

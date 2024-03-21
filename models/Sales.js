const knex = require('../config.js')

const findAll = () => {
  return knex.select('*')
    .from('sales')
}

module.exports = { findAll }

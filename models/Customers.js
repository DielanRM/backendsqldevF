// trae los datos de la DB
const knex = require('../config.js')

const create = (bodyCustomer) => {
  return knex
    .insert(bodyCustomer)
    .into('customers')
    .returning('*')
}

module.exports = { create }

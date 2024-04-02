// trae los datos de la DB
const knex = require('../config.js')

const create = (bodyCustomer) => {
  return knex
    .insert(bodyCustomer)
    .into('customers')
    .returning('*')
}

const findAll = () => {
  return knex.select('*')
    .from('customers')
}

const findOne = (customerId) => {
  return knex
    .select('*')
    .from('customers')
    .where('customer_id', customerId)
}

const update = (customerId, bodyToUpdate) => {
  return knex
    .update(bodyToUpdate)
    .from('customers')
    .where('customer_id', customerId)
    .returning('*')
}

module.exports = { create, findAll, findOne, update }

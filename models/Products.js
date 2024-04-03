// trae los datos de la base de datos (DB)
const knex = require('../config')

const create = (bodyProduct) => {
  return knex
    .insert(bodyProduct)
    .into('products')
    .returning('*')
}

const findAll = () => {
  return knex.select('*')
    .from('products')
}

const findOne = (productId) => {
  return knex
    .select('*')
    .from('products')
    .where('product_id', productId)
}

const updateProduct = (productId, bodyToUpdate) => {
  return knex
    .update(bodyToUpdate)
    .from('products')
    .where('product_id', productId) //   DUDA EL PONER EL . ANTES DE LA FUNCION ES COMO SI COLOCARA EN CADA LINEA (return knex."funcion")?
    .returning('*')
}

const destroyProduct = (productId) => {
  return knex
    .del()
    .from('products')
    .where('product_id', productId)
}

module.exports = { create, findAll, findOne, updateProduct, destroyProduct }

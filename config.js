// tomara la configuracion del entorno de node, y si no existe usara development por defecto
const env = process.env.NODE_ENV || 'development'

const knexfile = require('./knexfile.js')

const knex = require('knex')

// LLamado a la configuracion correcta de knexfile
module.exports = knex(knexfile[env])

require('dotenv').config()
const express = require('express')

// Rutas importadas
const productRoutes = require('./routes/productRoutes.js')
const customerRoutes = require('./routes/customerRoutes.js')
const salesRoutes = require('./routes/salesRoutes.js')

const app = express()

// Midlewares
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// Rutas
app.use('/api/v1', productRoutes)
app.use('/api/v1', customerRoutes)
app.use('/api/v1', salesRoutes)

// Servidor escuchando
app.listen(3000, () => {
  console.log('Server On: 3000')
})

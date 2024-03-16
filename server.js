const express = require('express')

// Rutas importadas
const productRoutes = require('./routes/productRoutes.js')

const app = express()

// Midlewares
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// Rutas
app.use('/api/v1', productRoutes)

// Servidor escuchando
app.listen(3000, () => {
  console.log('Server On: 3000')
})

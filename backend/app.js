const express = require('express')
const mongoose = require('mongoose')
const requireDir = require('require-dir')

// Iniciando o App
const app = express()
app.use(express.json())

// Iniciando o DB
mongoose.connect('mongodb://db/nodeapi', { useNewUrlParser: true} )
requireDir('./src/models')

// const Product = mongoose.model('Product')

// Rotas
app.use('/api', require('./src/routes'))

app.listen(3000)

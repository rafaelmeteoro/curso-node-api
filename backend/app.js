const express = require('express')
const mongoose = require('mongoose')
const requireDir = require('require-dir')

// Iniciando o App
const app = express()

// Iniciando o DB
mongoose.connect('mongodb://db/nodeapi', { useNewUrlParser: true} )
requireDir('./src/models')

// const Product = mongoose.model('Product')

// Rotas
app.use('/api', require('./src/routes'))

app.listen(3000)

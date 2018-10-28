const express = require('express')
const mongoose = require('mongoose')
const requireDir = require('require-dir')

// Iniciando o App
const app = express()

// Iniciando o DB
mongoose.connect('mongodb://db/nodeapi', { useNewUrlParser: true} )
requireDir('./src/models')

const Product = mongoose.model('Product')

// Primeira rota
app.get('/', (req, res) => {
    Product.create({
        title: 'React Native',
        description: 'Build native app with React',
        url: 'http://github.com/facebook/react-native'
    })

    return res.send('Hello World 2')
})

app.listen(3000)

const mongoose = require('mongoose')

mongoose.connect("mongodb://0.0.0.0:27017/biblioteca")

const LibroSchema = new mongoose.Schema({
    titulo: String,
    autor: String,
},{collection: 'libros'})

const Libro = mongoose.model('Libro', LibroSchema)

module.exports = Libro
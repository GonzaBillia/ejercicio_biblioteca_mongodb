const express = require('express')
const router = express.Router()

const LibroController = require('../controllers/libroController')

const Libro = require('../models/Libro')

//libreria validacion de scopes
const { requiredScopes } = require("express-oauth2-jwt-bearer")

//Get de todos los libros
router.get('/', requiredScopes("read:libros"), LibroController.getAllLibros)

//Get de un libro con id
router.get('/:id', requiredScopes("read:libros"), LibroController.getLibroById)

//Post de un libro
router.post('/', requiredScopes("write:libros"), LibroController.createLibro)

//Put de un libro
router.put('/:id', requiredScopes("write:libros"), LibroController.updateLibro)

//Delete de un libro
router.delete('/:id', requiredScopes("write:libros"), LibroController.deleteLibro)

module.exports = router
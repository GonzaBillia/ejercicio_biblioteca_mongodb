const express = require('express')
const router = express.Router()

const Libro = require('../models/Libro')

//Get de todos los libros
router.get('/', async(req,res)=>{
    try{
        const libros = await Libro.find()
        res.json(libros)
    }catch(err){
        res.status(500).json({error: "Error al obtener libros"})
    }
})

//Get de un libro con id
router.get('/:id', async(req,res)=>{
    try{
        const libro = await Libro.findById(req.params.id, req.body)
        res.json(libro)
    }catch(err){
        res.status(500).json({error: "Libro no encontrado"})
    }
})

//Post de un libro
router.post('/', async(req,res)=>{
    try{
        const nuevoLibro = new Libro(req.body)
        await nuevoLibro.save()
        res.json(nuevoLibro)
    }catch(err){
        res.status(500).json({error: "Error al crear Libro"})
    }
})

//Put de un libro
router.put('/:id', async(req,res)=>{
    try{
        const Libro = await Libro.findByIdAndUpdate(req.params.id, req.body,{
            new: true,
        })
        res.json(Libro)
    }catch(err){
        res.status(500).json({error: "Error al actualizar libro"})
    }
})

//Delete de un libro
router.delete('/:id', async(req,res)=>{
    try{
        await Libro.findByIdAndDelete(req.params.id)
        res.json({message: 'Libro eliminado correctamente'})
    }catch(err){
        res.status(500).json({error: "Error al eliminar libro"})
    }
})

module.exports = router
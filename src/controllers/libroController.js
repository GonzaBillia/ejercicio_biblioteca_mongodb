const Libro = require('../models/Libro')

//Obtener todos los productos
exports.getAllLibros = async(req,res)=>{
    try{
        const libros = await Libro.find()
        res.status(200).json(libros)
    }catch(err){
        res.status(500).json({error: "Error al obtener libros"})
    }
}

//Obtener Libro por ID
exports.getLibroById = async(req,res)=>{
    try{
        const libro = await Libro.findById(req.params.id, req.body)
        if(!libro){
            res.status(404).json({error: "Libro no encontrado"})
        }
        res.status(200).json(libro)
    }catch(err){
        res.status(500).json({error: "Error al obtener el libro"})
    }
}

//Crear un nuevo Libro
exports.createLibro = async(req,res)=>{
    try{
        const nuevoLibro = await Libro.create(req.body)
        res.status(201).json(nuevoLibro)
    }catch(err){
        res.status(500).json({error: "Error al crear Libro"})
    }
}

//Modificar un Libro
exports.updateLibro = async(req,res)=>{
    try{
        const Libro = await Libro.findByIdAndUpdate(req.params.id, req.body,{
            new: true,
        })
        if(!Libro){
            res.status(404).json({error: "libro no encontrado"})
        }
        res.status(200).json(Libro)
    }catch(err){
        res.status(500).json({error: "Error al actualizar libro"})
    }
}

//Eliminar un libro
exports.deleteLibro = async(req,res)=>{
    try{
        const eliminarLibro = await Libro.findByIdAndDelete(req.params.id)
        if(!eliminarLibro){
            res.status(404).json({error: "Libro no encontrado"})
        }
        res.status(200).json({eliminarLibro, message: 'Libro eliminado correctamente'})
    }catch(err){
        res.status(500).json({error: "Error al eliminar libro"})
    }
}
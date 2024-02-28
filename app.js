const express = require('express')
const app = express()
app.use(express.json())
const port = 3000

//Import Router Libros
const routerLibros = require('./routes/libros')

//Import middleware errorHandler
const errorHandler = require('./middlewares/errorHandler')

app.use('/libros', routerLibros)

app.use(errorHandler)

app.listen(port, ()=>{
    console.log("Servidor iniciado")
})

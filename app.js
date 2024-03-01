const express = require('express')
const { auth } = require('express-oauth2-jwt-bearer')
const app = express()

const port = 3000

//COnfiguracion de Middleware con el server de autorizacion
const jwtCheck = auth({
    audience: 'http://127.0.0.1:3000/api/libros',
    issuerBaseURL: 'https://dev-kowsui8n8y4hixs7.us.auth0.com/',
    tokenSigningAlg: 'RS256'
});

app.use(express.json())

//Import Router Libros
const routerLibros = require('./src/routes/libros')

//Import middleware errorHandler
const errorHandler = require('./src/middlewares/errorHandler')

app.use('/api/libros', jwtCheck, routerLibros)

app.use(errorHandler)

app.listen(port, ()=>{
    console.log("Servidor iniciado")
})

module.exports = app
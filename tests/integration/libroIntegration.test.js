const request = require('supertest')
const app = require('../../app')

test("Obtener lista de productos", async()=>{
    const response = await request(app).get('api/libros')

    expect(response.statusCode).toBe(200)
    expect(response.body).toHaveLength(3)
})

test("Crear un nuevo libro", async()=>{
    const nuevoLibro = {titulo: 'Libro Test', autor: 'autor test'}

    const response = await request(app)
        .post('api/libros')
        .send(nuevoLibro)

        expect(response.statusCode).toBe(201)
        expect(response.body.titulo).toBe('Libro test')
})
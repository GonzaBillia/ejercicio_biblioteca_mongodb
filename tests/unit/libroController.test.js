const { getAllLibros, createLibro } = require('../../src/controllers/libroController')
const libroModel = require('../../src/models/Libro')

jest.mock('../../src/models/Libro')

describe("Producto Controller", ()=>{
    afterEach(()=>{
        jest.clearAllMocks()
    })

    test("getAllLibros deberia obtener todos los libros", async ()=>{
        const mockLibros = [
            {titulo: "Libro 1", autor: "autor 1"},
            {titulo: "Libro 2", autor: "autor 2"}
        ]
    
        libroModel.find.mockResolvedValue(mockLibros)
    
        const req = {}
        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn()
        }
    
        await getAllLibros(req, res)
    
        expect(res.status).toHaveBeenCalledWith(200)
        expect(res.json).toHaveBeenCalledWith(mockLibros)
        expect(libroModel.find).toHaveBeenCalledTimes(1)
    })

    test("getAllLibros deberia poder manejar errores", async()=>{
        const errorMessage = "Error al obtener libros"

        libroModel.find.mockRejectedValue(new Error(errorMessage))

        const req = {}
        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn()
        }

        await getAllLibros(req, res)

        expect(res.status).toHaveBeenCalledWith(500)
        expect(res.json).toHaveBeenCalledWith({error: errorMessage})
        expect(libroModel.find).toHaveBeenCalledTimes(1)

    })

    test("createLibro deberia crear un nuevo libro", async ()=>{
        const mockLibroData = {titulo: 'Libro Test', autor: 'autor test'}
        const mockSavedLibro = {_id: '1', ...mockLibroData}

        libroModel.create.mockResolvedValue(mockSavedLibro)

        const req = { body: mockLibroData}
        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn()
        }

        await createLibro(req, res)

        expect(res.status).toHaveBeenCalledWith(201)
        expect(res.json).toHaveBeenCalledWith(mockSavedLibro)
        expect(libroModel.create).toHaveBeenCalledTimes(1)
        expect(libroModel.create).toHaveBeenCalledWith(mockLibroData)
    })
})


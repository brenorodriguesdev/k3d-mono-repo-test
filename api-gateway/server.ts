import cors from 'cors'
import express from 'express'
import { 
    createProductController, 
    deleteByIdProductController, 
    getAllProductController, 
    getByIdProductController, 
    updateProductController } from './controllers'

const app = express()
app.use(express.json())
app.use(cors())
app.get('/product', getAllProductController.handle)
app.get('/product/:id', getByIdProductController.handle)
app.post('/product', createProductController.handle)
app.put('/product', updateProductController.handle)
app.delete('/product/:id', deleteByIdProductController.handle)

app.listen(process.env.PORT || 4500)
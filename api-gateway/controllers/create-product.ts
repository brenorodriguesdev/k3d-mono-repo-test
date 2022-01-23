import { AMQPClient } from "../clients/amqp-client";
import { CreateProductService } from "../services/create-product";
import { Request, Response } from 'express'

class CreateProductController {
    constructor (private readonly createProductService: CreateProductService) {}
    async handle(request: Request, response: Response): Promise<void> {
        const product = request.body
        if (!product.name) {
            throw new Error('The field name is required!')
        }
        this.createProductService.create(product)
        response.status(201).send()
    }
}

const amqpClient = new AMQPClient()
const createProductService = new CreateProductService(amqpClient)
const createProductController = new CreateProductController(createProductService)

export { createProductController }
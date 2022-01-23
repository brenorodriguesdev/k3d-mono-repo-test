import { AMQPClient } from "../clients/amqp-client";
import { Request, Response } from 'express'
import { UpdateProductService } from "../services/update-product";

class UpdateProductController {
    constructor(private readonly updateProductService: UpdateProductService) { }
    async handle(request: Request, response: Response): Promise<void> {
        const product = request.body
        if (!product.id) {
            throw new Error('The field id is required!')
        }

        if (!product.name) {
            throw new Error('The field name is required!')
        }
        this.updateProductService.update(product)
        response.status(201).send()

    }
}

const amqpClient = new AMQPClient()
const updateProductService = new UpdateProductService(amqpClient)
const updateProductController = new UpdateProductController(updateProductService)

export { updateProductController }
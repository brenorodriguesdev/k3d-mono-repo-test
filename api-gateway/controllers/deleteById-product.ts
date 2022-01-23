import { AMQPClient } from "../clients/amqp-client";
import { DeleteByIdProductService } from "../services/deleteById-product";
import { Request, Response } from 'express'

class DeleteByIdProductController {
    constructor (private readonly deleteByIdProductService: DeleteByIdProductService) {}
    async handle(request: Request, response: Response): Promise<void> {
        const { id } = request.params
        if (!id) {
            throw new Error('The field id is required!')
        }
        this.deleteByIdProductService.delete(Number(id))
        response.status(201).send()

    }
}

const amqpClient = new AMQPClient()
const deleteByIdProductService = new DeleteByIdProductService(amqpClient)
const deleteByIdProductController = new DeleteByIdProductController(deleteByIdProductService)

export { deleteByIdProductController }
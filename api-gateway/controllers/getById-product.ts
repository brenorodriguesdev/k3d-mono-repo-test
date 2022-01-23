import { AMQPClient } from "../clients/amqp-client";
import { GetByIdProductService } from "../services/getById-product";
import { Request, Response } from 'express'

class GetByIdProductController {
    constructor (private readonly getByIdProductService: GetByIdProductService) {}
    async handle(request: Request, response: Response): Promise<void> {
        const { id } = request.params

        if (!id) {
            throw new Error('The field id is required!')
        }
        response.status(200).json(await this.getByIdProductService.get(Number(id)))
    }
}

const amqpClient = new AMQPClient()
const getByIdProductService = new GetByIdProductService(amqpClient)
const getByIdProductController = new GetByIdProductController(getByIdProductService)

export { getByIdProductController }
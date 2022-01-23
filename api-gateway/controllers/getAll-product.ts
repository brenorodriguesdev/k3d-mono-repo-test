import { AMQPClient } from "../clients/amqp-client";
import { Request, Response } from 'express'
import { GetAllProductService } from "../services/getAll-product";

class GetAllProductController {
    constructor(private readonly getAllProductService: GetAllProductService) { }
    async handle(request: Request, response: Response): Promise<void> {
        response.status(200).json(await this.getAllProductService.get())
    }
}

const amqpClient = new AMQPClient()
const getAllProductService = new GetAllProductService(amqpClient)
const getAllProductController = new GetAllProductController(getAllProductService)

export { getAllProductController }
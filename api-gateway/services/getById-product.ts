import { AMQPClient } from "../clients/amqp-client";
import { Product } from "../entities/product";

export class GetByIdProductService {
    constructor (private readonly AMQPClient: AMQPClient) {}
    async get(id: number): Promise<Product> {
        return this.AMQPClient.send('getById-product', { id })
    }
}
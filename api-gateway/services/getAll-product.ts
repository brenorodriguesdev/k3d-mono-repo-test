import { AMQPClient } from "../clients/amqp-client";
import { Product } from "../entities/product";

export class GetAllProductService {
    constructor (private readonly AMQPClient: AMQPClient) {}
    async get(): Promise<Product[]> {
        return this.AMQPClient.send('getAll-product', {})
    }
}
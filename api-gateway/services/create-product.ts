import { Product } from "../entities/product";
import { AMQPClient } from "../clients/amqp-client";
export class CreateProductService {
    constructor (private readonly AMQPClient: AMQPClient) {}
    async create(product: Product): Promise<void> {
        this.AMQPClient.send('create-product', product)
    }
}
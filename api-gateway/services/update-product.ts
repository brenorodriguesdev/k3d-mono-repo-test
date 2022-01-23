import { AMQPClient } from "../clients/amqp-client";
import { Product } from "../entities/product";

export class UpdateProductService {
    constructor (private readonly AMQPClient: AMQPClient) {}
    async update(product: Product): Promise<void> {
        this.AMQPClient.send('update-product', product)
    }
}
import { AMQPClient } from "../clients/amqp-client";

export class DeleteByIdProductService {
    constructor (private readonly AMQPClient: AMQPClient) {}
    async delete(id: number): Promise<void> {
        this.AMQPClient.send('deleteById-product', { id })
    }
}
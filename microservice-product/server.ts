import {
    createProductController,
    deleteByIdProductController,
    updateProductController,
    getAllProductController,
    getByIdProductController
} from "./controllers"

var amqp = require('amqplib/callback_api');

amqp.connect(process.env.RABBITMQ_CONNECTION, function (error0: any, connection: any) {
    connection.createChannel(function (error1: any, channel: any) {
        channel.consume('create-product', createProductController.handle, { noAck: true });
        channel.consume('update-product', updateProductController.handle, { noAck: true });
        channel.consume('deleteById-product', deleteByIdProductController.handle, { noAck: true });

        channel.consume('getAll-product', async (msg: any) => {
            const result = await getAllProductController.handle()

            channel.sendToQueue(msg.properties.replyTo,
                Buffer.from(result ? JSON.stringify(result) : ''), {
                correlationId: msg.properties.correlationId
            });

        }, { noAck: true });

        channel.consume('getById-product', async (msg: any) => {
            const result = await getByIdProductController.handle(msg.content)

            channel.sendToQueue(msg.properties.replyTo,
                Buffer.from(result ? JSON.stringify(result) : ''), {
                correlationId: msg.properties.correlationId
            });

        }, { noAck: true });

    });
});
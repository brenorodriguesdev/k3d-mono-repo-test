export class Consumer {
    async readAndResponse(channel: any, msg: any) {
        const result = await controller.handle({ payload: JSON.parse(msg.content) })

        channel.sendToQueue(msg.properties.replyTo,
            Buffer.from(result ? JSON.stringify(result) : ''), {
            correlationId: msg.properties.correlationId
        });

        channel.ack(msg);
    }

    async read() {
        const result = await controller.handle({ payload: JSON.parse(msg.content) })

        channel.sendToQueue(msg.properties.replyTo,
            Buffer.from(result ? JSON.stringify(result) : ''), {
            correlationId: msg.properties.correlationId
        });

        channel.ack(msg);
    }
}
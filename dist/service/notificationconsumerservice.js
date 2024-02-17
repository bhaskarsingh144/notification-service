import { Kafka } from 'kafkajs';
const kafka = new Kafka({
    clientId: 'my-consumer',
    brokers: ['localhost:9092'],
});
const consumer = kafka.consumer({ groupId: 'test-group' });
await consumer.connect();
await consumer.subscribe({ topic: 'common-notification-request', fromBeginning: true });
await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
        try {
            const parsedMessage = JSON.parse(message.value.toString());
            console.log({
                value: parsedMessage,
            });
        }
        catch (error) {
            console.error('Error parsing message:', error);
        }
    },
});
//# sourceMappingURL=notificationconsumerservice.js.map
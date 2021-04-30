const Produce = require('./Produce');

const producer = new Produce();

module.exports = (payload) => {
    producer.produce(payload.topic,JSON.stringify(payload));
}
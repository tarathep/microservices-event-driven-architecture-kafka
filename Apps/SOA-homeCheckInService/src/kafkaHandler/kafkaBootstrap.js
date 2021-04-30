// FOR ADMIN CREATE TOPIC
const Produce = require('./Produce');

const producer = new Produce();

const topics = [
    { topic : 'HOME_CHECKIN_CREATED',partitions : 1,replicationFactor : 1 }
]

producer.createTopic(topics).then(res => {

})
.catch(err => {
    console.log(`Error ${err}`)
})
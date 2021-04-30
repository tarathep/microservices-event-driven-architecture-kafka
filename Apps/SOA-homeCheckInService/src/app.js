const configs = require('./config')
const express = require('express');
const mongoose = require('mongoose');
const CreateHomeCheckIn = require('./Controller/createHomeCheckIn')
const app = express();
app.use(express.json());


mongoose.connect(configs.mongo_connect,{ useNewUrlParser : true,useUnifiedTopology : true }).then(data =>{
    //OPEN APIs for service
    app.post('/api/SOA/home/checkin',CreateHomeCheckIn);
    
    app.listen(3000,() => {
        console.log('server is running on port 3000');
    })
}).catch(err => {
    console.log(`Error in Mongo Connection ${err}`)
})

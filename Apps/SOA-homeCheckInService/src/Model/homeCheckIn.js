const Mongoose = require('mongoose');

const homeCheckInSchema = new Mongoose.Schema({
    internetNo : {
        type : String,
        required : true
    },
    orderNo : {
        type : String,
        required : true
    },
    staffCode: {
        type: String,
        required : true
    },
    jobStatus : {
        type : String,
        required : true
    },
    checkinLatitude : {
        type : Number,
        required : true
    },
    checkinLongitude : {
        type : Number,
        required : true
    },
    checkinDate : {
        type : Date,
        required : true
    }
},{ timestamps : true})

module.exports = Mongoose.model('homeCheckIn',homeCheckInSchema)
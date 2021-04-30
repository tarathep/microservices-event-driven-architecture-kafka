const uuidv1 = require('uuid/v1');

const HomeCheckInModel = require('../Model/homeCheckIn');
const Producer = require('../kafkaHandler/Producer');

const CreateHomeCheckIn = async (req,res) => {
    try{
        //COMBINE DATA TO MODEL
        const internetNo = req.body.internetNo;
        const orderNo = req.body.orderNo;
        const staffCode = req.body.staffCode;
        const jobStatus = req.body.jobStatus;
        const checkinLatitude = req.body.checkinLatitude;
        const checkinLongitude = req.body.checkinLongitude;
        const checkinDate = req.body.checkinDate;

        const homeCheckIn = await new HomeCheckInModel({internetNo : internetNo , orderNo : orderNo , staffCode : staffCode , jobStatus : jobStatus , checkinLatitude : checkinLatitude , checkinLongitude : checkinLongitude , checkinDate : checkinDate})

        //SAVE INTO PERSISTACE DATA (MOGODB)
        await homeCheckIn.save();
        
        //RESPOSNE API SUCCESS
        res.send(homeCheckIn)

        //PRODUCE MESSAGE TO FBB
        Producer({
            topic : 'HOME_CHECKIN_CREATED',
            payload : {
                data : {
                    internetNo : homeCheckIn.internetNo,
                    orderNo : req.body.orderNo,
                    staffCode : req.body.staffCode,
                    jobStatus : req.body.jobStatus,
                    checkinLatitude : req.body.checkinLatitude,
                    checkinLongitude : req.body.checkinLongitude,
                    checkinDate : req.body.checkinDate
                }
            }
        })

    }catch(e){
        console.log(e);
    }
}

module.exports = CreateHomeCheckIn
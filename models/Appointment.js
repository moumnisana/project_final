const mongoose =require('mongoose');


const appointmentSchema = new mongoose.Schema({
  
  
    patientId:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref:'User'
    },
    doctorId:{
        type:mongoose.Schema.Types.ObjectId,
        required: true,
        ref:'User'
    },
    date:{
        type:String,
        required:true,


    },
    status:{
        type:String,
        default:"pending",
        required:true,
    },
   
});
const appointment =mongoose.model('appointment',appointmentSchema)
module.exports =appointment

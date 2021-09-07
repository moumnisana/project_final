const appointment = require('../models/Appointment')
const ObjectID = require('mongoose').Types.ObjectId;

//creating appointment
const createAppointment = async(req,res)=>{
   
  
    try{
      const { patientId,doctorId,date, status} = req.body;
      const newAppointment = new appointment({ patientId,doctorId,date, status})
      let result = await newAppointment.save()
      res.status(200).json({status:true,message:"appointment created",data:result })
    }catch(err){
        console.log(err)
        res.status.json({status:false,message:"appointment not  created",err} )

    }
}
//get one appointment 
const  getappointment =async(req,res)=>{
    try{

        const one = await appointment.findById(req.params.id)
        res.status(200).json(one)
    }catch(err){
        console.log(err)
        res.status(404).json({status:false,message:"appointment not  found",err} )

    }

} 
//get all appointment
const getAllAppointment =async(req,res)=>{
    try {
        let allAppointments =await appointment.find({})
        res.status(200).json(allAppointments)
     }catch(err){
         console.log('error is ',err)
         res.status(400).send(err)
     }

} 
//edit appointment
const updatAppointment =async(req,res)=>{
    try{
       let result = await appointment.findByIdAndUpdate(req.params.id,{...req.body});
        res.status(200).json( {status: true,message:"appontment updated",data:result,})
    }catch(err){
        console.log(err)
        res.status(500).json({status:false,msg:err})
    }

}
const deleteAppointment=async(req,res)=>{
    try{
       let deletedappointment = await appointment.findByIdAndDelete(req.params.id);
        res.status(200).json( {status: true,message:"appointment deleted",data:deletedappointment})
    }catch(err){
        console.log(err)
        res.status(500).json({status:false,msg:err})
    }

}

//delet appointment 
module.exports={
    createAppointment,
    getappointment,
    getAllAppointment,
    updatAppointment,
    deleteAppointment,

}
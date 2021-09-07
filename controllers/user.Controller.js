const User = require('../models/User')
const ObjectID = require('mongoose').Types.ObjectId;
//get one 
const getone =async(req,res)=>{
    try{
       
        const one = await User.findById(req.params.id)
        res.status(200).json(one)
    }catch(err){
        console.log(err)
        res.status(400).send({message :'ID unknown'})

    }

}
//get all the patients

    const  getAllpatients = async(req,res)=>{
        
        try {
           const patients =await User.find({ typeOfuser:"patient"});
           res.status(200).json(patients)
        }catch(err){
            console.log(err)
            res.status(400).send(err)
        }
    }

//get all the doctors

  const getAlldoctors = async(req,res)=>{
        
        try {
           const doctors =await User.find({ typeOfuser:"doctor"});
           res.status(200).json(doctors)
        }catch(err){
            console.log(err)
            res.status(400).send(err)
        }
    }
    //Update user 
    const updateUser =async(req,res)=>{
        try{
           let result = await User.findByIdAndUpdate(req.params.id,{...req.body});
            res.status(200).json( {status: true,message:"user updated",data:result,})
        }catch(err){
            console.log(err)
            res.status(500).json({status:false,msg:err})
        }

    }
    //Delet user 
    const deleteUser=async(req,res)=>{
        try{
           let deletedUser = await User.findByIdAndDelete(req.params.id);
            res.status(200).json( {status: true,message:"user deleted",data:deletedUser})
        }catch(err){
            console.log(err)
            res.status(500).json({status:false,msg:err})
        }

    }

module.exports={
    getAllpatients,
    getAlldoctors,
    getone ,
    updateUser,
    deleteUser,

}
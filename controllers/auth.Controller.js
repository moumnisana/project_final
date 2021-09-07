const bcrypt=require('bcrypt');
const User = require('../models/User');
const jwt =require('jsonwebtoken')
require('dotenv').config({path:'./config/.env'})
maxAge = 3*24*60*60*1000
//create token 
const createToken = (id)=>{
    return jwt.sign({id},process.env.TOKEN_SECRET,{
        expiresIn: maxAge
    })
};

//signUp

    const  signUp  =async (req,res) =>{
        try{
            console.log(req.body);
            const { firstName,lastName,email,date_of_birth, phone,typeOfuser,isAdmin,password}=req.body

        const user = await User.create({firstName,lastName,email,date_of_birth, phone,typeOfuser,isAdmin,password})
        res.status(201).json({status:true,message:'user created',data:user})
    }catch(err){
        console.log(err);
        res.status(200).send({err})
    }
    }

//signIn

     const signIn= async (req,res)=>{
        const {email,password}=req.body

        
        try{
           
            const user = await User.login(email,password)
            const token =createToken(user._id);
            res.cookie('jwt',token,{httpOnly:true,maxAge:maxAge})
            
            res.status(200).json({user:user._id})
            
        }catch(err){
            console.log(err)
            res.status(200).json(err)


        }
        

    }
    //log out
    const logOut = async(req,res)=>{
        res.cookie('jwt','',{maxAge:1})
        res.redirect('/')
   
    }


module.exports={
    signUp,
    signIn,
    logOut,

}
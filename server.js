const express =require('express');
const userRoutes = require('./routes/user.routes')
const appointmentRoutes=require('./routes/appointment.routes')
const bodyParser=require('body-parser')
const cookieParser=require('cookie-parser')
require('dotenv').config({path:'./config/.env'})
const { verifyToken } = require("./middleware/verifyToken");

const connectDB=require('./config/db')
const app=express();

connectDB()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cookieParser())
//jwt
//app.get('*',verifyToken)

//routes
app.use('/api/user',userRoutes)
app.use('/api/appointment',appointmentRoutes)
//server
app.listen(process.env.PORT,()=>{
    console.log(`listening on port ${process.env.PORT}`);
})
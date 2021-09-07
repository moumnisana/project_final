const mongoose = require('mongoose')
require('dotenv').config()

const connectDB=async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
           // useCreateIndex: true,
           // useFindAndModify: false,
        });
        console.log('Connected to MongoDB');
    }catch(err){
        console.log('Failed to connect to MongoDB',err);
        
    }
}
module.exports=connectDB
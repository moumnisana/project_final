const mongoose = require('mongoose');
const bcrypt = require('bcrypt')
const userSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required: true,
        trim: true,
        
    },
    lastName:{
        type:String,
        required: true,
        trim: true,
    },
   
   
    email:{
        type:String,
        required:true,
        trim: true,
        unique: true,
    },
   
    date_of_birth:{
        type:String
    },
    phone: {
        type:Number,
        unique:true,
    },
    typeOfuser:{
        type:String,

    },
    speciality: {
        type: String,
        description:"if user is a doctor"
    
    },
   
    stars:{
        type:[String],
        default:[" "," "," "," "," "], 
        description:"if user is a doctor"

    },
    
    isAdmin:{
        type:Boolean,
        default:false

    },
    password:{
        type:String,
        required: true,
        trim: true,
    }
   
   
});
 
//play function before save into display:blockk
userSchema.pre("save",async function(next){
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password,salt);
    next();
});
userSchema.statics.login=async function(email,password){
    const user =await this.findOne({email})
    if (user) {
        const auth = await bcrypt.compare(password,user.password);
        if(auth){
   
            
            return user
        }throw Error('invalid credentials')
    }throw Error('invalid credentials')

}
const User =mongoose.model('User',userSchema)
module.exports =User
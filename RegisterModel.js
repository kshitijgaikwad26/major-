const mongoose=require('mongoose')
const RegisterSchema=mongoose.Schema({
    "name":{
     type:String,
     require:true
    },
     "email":{
     type:String,
     require:true,
     unique:true
    },
    "password":{
     type:String,
     require:true
    },
    "confirmPassword":{
        type:String,
        require:true
    },
    "mobileNo":{
        type:Number,
        require:true
       }
 })
 module.exports=mongoose.model("Register",RegisterSchema)
 
 
 
const mongoose=require('mongoose')
const userschema=mongoose.Schema({
    name:{type:String,required:true,unique:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true,unique:true},
})
const User=mongoose.model('user',userschema)
module.exports=User;
const mongoose=require("mongoose");

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true
    }
},
     {
        versionKey:false,
     }
)

export const userModel=mongoose.model("user",userSchema);
module.exports=userModel;


        
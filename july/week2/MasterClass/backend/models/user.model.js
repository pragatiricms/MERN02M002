const mongoose= require ("mongoose")

const userSchema=new mongoose.Schema({
    fullName:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        require:true,
    },
    password:{
        type:String,
        required:true,
    },
    role:{
    type:String,
    required:true,
    enum: ["admin","user"],
    default:"user",
    },
});

const User =mongoose.model("User", userSchema);

module.exports= User;
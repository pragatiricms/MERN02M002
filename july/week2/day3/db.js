const mongoose=require("mongoose");


const connectDB = async () => {
    try{
        const connection=mongoose.connect("mongodb://127.0.0.1:27017/MyDataBase");
        console.log("MongoDB connected");

        // userModel.insertOne({name:"gobardhan",age:30,email:"gobara@gmail.com",password:1234})
        // userModel.insertOne({name:"Pragati",age:21,email:"pragati@gmail.com",password:5678})
        
        // const user=new userModel({
        //     name:"Khusi",
        //     age:22,
        //    email:"khusi@gmail.com",
        //    password:"khusi123"
        // })

        // await user.save();
        // const data=await userModel.findOne();
        // console.log(data)
        // console.log("Data saved");

        userModel.findByIdAndUpdate({_id:'686e138a967690cf8c75b578'},{name:"Gobara",age:32,email:"Gobara@gmail.com",password:"gobara123"})
        console.log("Data updated");
    }catch(error){
        console.log("Error",error)
    }
}


const userSchema=mongoose.Schema({
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
    required:true
    },
    password:{
        type:String,
        required:true
    }
})



const userModel=mongoose.model("user",userSchema)

module.exports=userModel;

module.exports=connectDB;
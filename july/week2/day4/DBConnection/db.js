const mongoose=require("mongoose");

const connectionDB=async()=>{
    try{
        const connection=await mongoose.connect("mongodb://127.0.0.1:27017/MyDataBase");
        console.log("Database connected ");

    }catch(error){
        console.log("Error is: ",error);
    }
}

module.exports=connectionDB;
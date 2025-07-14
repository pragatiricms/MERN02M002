const express=require("express");

const dotenv=require("dotenv");
const connectionDB = require("./DBConnection/db");
const router = require("./routes/router");

dotenv.config();

const app=express();
connectionDB();
app.use(express.json());

const port=process.env.PORT;
app.use("/api",router)

app.listen(port,(res,req)=>{
    
    console.log("My server is running on port ",port);
})


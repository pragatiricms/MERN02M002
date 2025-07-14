const { hash } = require("crypto");
const User = require("../models/user.model");
const bcrypt=require("bcryptjs")
const jwt=require("jsonwebtoken")

exports.Registration=async (req,res)=>{
    try{
    

        const{fullName,email,password,}=req.body;

        const existuser=await User.find({email})

        if(existuser?.length>0)
        {
            return res.send({ status:false, message : "already user exist"})
        }

        bcrypt.hash(password, 10,async function(err, hash) {

            if(err){
                return res.send(
                    {
                        status:false,
                        message:"issue in hash password , register fail"
                    }
                )
            }
            
        const user=new User({
            fullName,
            email,
            password:hash,
        })

        const result= await user.save()
        res.send({status:true,message:"Register Successfully ",user:result});

    // Store hash in your password DB.
    
});


    }catch(err)
    {
        res.send({ status:false, message : "Resgister fail ",error:err })
        console.log(err);
        
    }
}

exports.Login = async(req,res)=>{
    try{
        const {email,password}=req.body;
        if(!email || !password){
            return res.send({ status:false, message : "Please add all the fields "})
        }

        const user= await User.findOne({email});

        if(!user){
            return res.send({ status:false, message : "User not found "})
        }

        bcrypt.compare(myPlaintextPassword, hash, function(err, result) {
            if(err){
                return res.send({ status:false, message : "wrong Password"})
            }
            
            const secret=process.env.jwt_secret;

           const token= jwt.sign(user, secret, {expiresIn:"1h"});

           res.send({status:true,message:"Login Successful",token,user});
         // result == true
        }); 
        res.send(user);


    } catch(err){
        res.send({ status:false, message : "Login fail "})
        console.log(err);
    }
}

exports.GetAllUsers = async(req,res)=>{
    try{
        const users=await user.find();
        if(users?.length>0){
            return res.send({
                status:true,
                message:"Users data get successful",
                users,
            })
        } else{
            return res.send({status:true, message:"No users found"})
        }
        res.send("Let's get all users");
    } catch(err){
        console.log(err)
        res.send({ status:false, message : "Can't get users",err})
    }
}
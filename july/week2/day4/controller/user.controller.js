export const createUser=async(req,res)=>{
    const dataBody=req.body;
    console.log(dataBody);

    const user=new userModel({name,age,email,password});
    await user.save();
    res.send("data saved");
}
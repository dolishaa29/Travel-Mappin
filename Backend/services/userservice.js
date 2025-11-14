let user=require('../models/users.js');
const bcrypt=require('bcrypt');
exports.register=async(req,res)=>
{
    try{
        const{username,email,password}=req.body;
        const existingUser=await user.findOne({
            email:email
        });
        if(existingUser)
        {
            return res.status(400).json({message:"User already exists"});
        }
        const hp=await bcrypt.hash(password,10);
        const newu=new user({
            username:username,
            email:email,
            password:hp,
        });
        await newu.save();
        res.status(201).json({message:"User registered successfully"});
    }
    catch(error)
    {
        console.error("Error during user registration:",error);
        res.status(500).json({message:"Internal server error"});
    }
};

exports.login=async(req,res)=>
{
    try{
        const{email,password}=req.body;
        const existingUser=await user.findOne({
            email:email
        });
        if(!existingUser)
        {
            return res.status(400).json({message:"Invalid email or password"});
        }
        const check=await bcrypt.compare(password,existingUser.password);
        if(!check)
        {
            return res.status(400).json({message:"Invalid email or password"});
        }
        res.status(200).json({message:"Login successful"});
    }
    catch(error)
    {
        console.error("Error during user login:",error);
        res.status(500).json({message:"Internal server error"});
    }
};
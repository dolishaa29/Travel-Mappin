const { register, login } = require("../services/userservice");

exports.register=async(req,res)=>{
    await register(req,res);
};

exports.login=async(req,res)=>{
    await login(req,res);
};
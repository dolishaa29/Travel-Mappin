const { createpin, viewpins } = require("../services/pinsservice");

exports.createpin=async(req,res)=>{
    await createpin(req,res);
};

edxports.viewpins=async(req,res)=>{
    await viewpins(req,res);
}
let Pin=require('../models/pins.js');

exports.createpin=async(req,res)=>{
     let username=req.body.username;
     let title=req.body.title;
     let desc=req.body.desc;
     let rating=req.body.rating;
     let lat=req.body.lat;
     let long=req.body.long;
        try{
            let newPin=new Pin({
                username:username,
                title:title,
                desc:desc,
                rating:rating,
                lat:lat,
                long:long,
            });
            await newPin.save();
            res.status(200).json({message:"Pin created successfully"});
        }catch(err){
            res.status(500).json({message:"Error creating pin",error:err.message});
        }
};

exports.viewpins=async(req,res)=>{
    try{
        let pins=await Pin.find();
        res.status(200).json(pins);
    }catch(err){
        res.status(500).json({message:"Error fetching pins",error:err.message});
    }
};
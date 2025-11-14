const mongo=require('mongoose');
const user=new mongo.Schema({
    username:{
        type:String,
        required:true,
        min:3,
        max:20,
        unique:true
    },

    email:{
        type:String,
        required:true,
        max:50,
        unique:true
    },

    password:{
        type:String,
        required:true,
        min:6
    },
},
    {timestamps:true},
);

module.exports=mongo.model('User',user);



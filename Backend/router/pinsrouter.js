let express=require('express');
const { createpin,viewpins } = require('../controller/pinscontroller.js');
let router=express.Router();

router.post('/createpin',createpin);
router.get("/viewpins",viewpins);

module.exports=router;
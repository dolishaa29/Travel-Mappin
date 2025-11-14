const express = require('express');
const cors = require('cors');
const { dbConnection } = require('./dbconnection'); 
const userRouter = require('./router/userrouter'); 
const userPins=require('./router/pinsrouter');

const app = express();
dbConnection();

app.use(cors({
  origin:"http://localhost:5173",
  methods:["POST","GET","DELETE","PUT"],
  credentials:true,
}));
app.use(express.json());  
app.use('/', userPins);
app.use('/', userRouter);
const port = 7000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

const dotenv=require('dotenv');
dotenv.config()
const express=require('express');
const cors = require("cors");
const connectDB = require('./database/db');
const userroute=require('./routes/userroute')
const app=express();
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors({
     origin: "http://localhost:5173", // frontend origin
    credentials: true,  
}))
app.use('/api/v1/user',userroute)
const PORT=process.env.PORT || 3000
connectDB()
app.listen(PORT,()=>console.log(`server started on port ${PORT}`));

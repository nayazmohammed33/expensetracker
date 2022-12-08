const express = require('express');
const db=require('./db.connect');
const Userroutes=require('../back-end/routes/user.routes')


var cors = require('cors')

 



const app=express();
app.use(express.json())
app.use(cors())
const port=8000;


app.use('/api',Userroutes);



app.listen(port,()=>{
    console.log(`Server runnung ${port}`);
})
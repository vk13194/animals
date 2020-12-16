const express= require('express')
const dotenv= require('dotenv')
//const logger =require('./middleware/logger')
dotenv.config({path:'./config/config.env'}) 
const app=express();
const morgan = require('morgan');
const connectDB = require('./config/db');
const colors = require('colors')
const path= require('path')

//app.use(logger)
app.use(express.json());
if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'));
}
connectDB();
//middleware
app.use(express.json())


app.use('/api', require('./routes/User'))

const PORT=process.env.PORT 

const server = app.listen( PORT, ()=>{
console.log(`server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold)
})


  
const mongoose = require('mongoose');
const connectDB = async () =>{
    const conn = await mongoose.connect('mongodb://localhost:27017/test', {
        useNewUrlParser:true,
        useCreateIndex:true, 
        useFindAndModify:false,
        useUnifiedTopology:true
    });
    console.log(`mongodb connected :${conn.connection.host}`.cyan.underline.bold)
}

module.exports= connectDB
const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    name:{
        type:String,
    },
    phone:{
        type:String,
    },
    pincode:{
        type:String,
    },
   
    date:{
        type:Date,
        default:Date.now
    }
});

module.exports = mongoose.model('user', UserSchema);

const mongoose = require("mongoose");

var mongoURL = 'mongodb+srv://koushik:ranganselvi@cluster0.r729svo.mongodb.net/food-token'

mongoose.connect(mongoURL , {useUnifiedTopology:true , useNewUrlParser:true})

var db = mongoose.connection 

db.on('connected' , ()=>{
    console.log('MongoDB connected successfully');
})

db.on('error' , ()=>{
    console.log('MongoDB connection failed');
})

module.exports = mongoose
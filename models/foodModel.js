const mongoose = require("mongoose");

const foodSchema = mongoose.Schema({

       name : {type: String , require},
       price : {type: String , require},
       category : {type: String , require},
       description : {type: String , require},
       image : {type: String , require}

}, {
   timestamps:true,
}) 

const foodModel = mongoose.model('food' , foodSchema)

module.exports = foodModel;
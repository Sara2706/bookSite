const mongoose = require('mongoose')

const OrderSchema = new mongoose.Schema({
    productName:{type:String},
    productId:{type:String},
    userID:{type:String},
    costumerName:{type:String},
    costumerAddress:{type:String},
    costumerPhoneNo:{type:String},
    qty:{type:Number},
    TotalAmount: {type:Number}

})

module.exports = mongoose.model('Order',OrderSchema)
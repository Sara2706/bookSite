const mongoose = require('mongoose')

const CartSchema = new mongoose.Schema({
    productName:{type:String},
    description:{type:String},
    productId:{type:String},
    userID:{type:String},
    qty:{type:Number},
    TotalAmount:{type:Number}
})

module.exports = mongoose.model('Cart',CartSchema)
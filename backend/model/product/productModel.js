const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    productName:{type:String},
    description:{type:String},
    img:{type:String},
    catogry:{type:String},
    price:{type:Number},
})

module.exports = mongoose.model('Product',ProductSchema)
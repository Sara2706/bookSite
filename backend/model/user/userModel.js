const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    username:{type:String},
    email:{type:String,unique: true},
    phone:{type:Number},
    password:{type:String},

},{timestamps:true})

module.exports = mongoose.model('User',UserSchema)
const mongoose = require('mongoose')
const validator = require('validator')


const Schema = mongoose.Schema
const userSchema = new Schema({
    userName : {
        type : String,
        unique : true,
        min : 8,
        max : 16,
        required : [true, 'UserName is Required'],
        validate : {
            validator : function (name){
                return validator.isAlphanumeric(name)
            },
            message : function (){
                return 'Name should only contain the Number and letter'
            }
        }
    },
    email : {
        type : String,
        required : [true, 'Email is required'],
        unique : true,
        validate : {
            validator : function (email){
                return validator.isEmail(email)
            },
            message : function (){
                return 'Email is not valid'
            }
        }
    },
    phoneNumber : {
        type : Number,
        required : [true,'Phone Number is Required'],
        unique : true
    },
    password : {
        type : String,
        min : 8,
        max : 128,
        required : true,
    }
})

const User = mongoose.model('User',userSchema)

module.exports = User
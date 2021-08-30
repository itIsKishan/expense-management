const mongoose = require('mongoose')
const Schema =  mongoose.Schema

const categoriesSchema = new Schema({
    category : {
        type : String,
        required : [true, 'category is required'],
        unique : true
    },
    createdAt : {
        type : Date,
        default : Date.now
    },
    userId : {
        type : Schema.Types.ObjectId,
        ref : 'User'
    }
})

const Category = mongoose.model('Category',categoriesSchema)

module.exports = Category
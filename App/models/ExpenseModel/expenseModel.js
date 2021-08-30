const mongoose = require('mongoose')

const Schema = mongoose.Schema
const expenseSchema = new Schema({
    itemName : {
        type : String,
        required : [true,'Item name is required'],
        min : [4, 'Name should be minimum of 4 character'],
        maax : [128, 'Name should only contain 128 characters']
    },
    amount : {
        type : Number,
        required : [true, 'Amount is required']
    },
    expenseDate : {
        type : Date,
        required : [true,'Date is required']
    },
    createdAt : {
        type : Date,
        default : Date.now
    },
    categoryId : {
        type : Schema.Types.ObjectId,
        ref : 'Category'
    }
})

const Expense = mongoose.model('Expense',expenseSchema)

module.exports = Expense
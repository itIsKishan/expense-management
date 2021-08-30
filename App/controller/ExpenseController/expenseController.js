const expenseController = {}
const jwt = require('jsonwebtoken')
const Expense = require('../../models/ExpenseModel/expenseModel')

expenseController.add = (req,res) =>{
    const data = req.body
    const expense = new Expense(data)
    expense.save()
    .then((expense) =>{
        res.json(expense)
    })
    .catch((err) =>{
        res.json(err)
    })
}

expenseController.showAll = (req,res) =>{
   Expense.find({ userId : req.user._id })
   .then((expenses) =>{
       res.json(expenses)
   })
   .catch((err) =>{
       res.json(err)
   })
}


expenseController.delete = (req,res) =>{
    const id = req.params.id
    Expense.findOneAndDelete({ _id : id, userId : req.user._id})
    .then((expense) =>{
        res.json(expense)
    })
    .catch((err) =>{
        res.json(expense)
    })
}

expenseController.update = (req,res) =>{
    const id = req.params.id
    const data = req.body
    Expense.findOneAndUpdate({ _id : id, userId : req.user._id},data,{ new : true, runValidators : true})
    .then((exp) =>{
        res.json(exp)
    })
    .catch((err) =>{
        res.json(err)
    })
}

module.exports = expenseController
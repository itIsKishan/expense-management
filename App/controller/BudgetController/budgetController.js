const budgetController = {}
const Budget = require('../../models/Budget/budgetModel')

budgetController.add = (req,res) =>{
    const data = req.body
    const budget = new Budget(data)
    budget.userId = req.user._id
    budget.save()
    .then((budget) =>{
        res.json(budget)
    })
    .catch((err) =>{
        res.json(err)
    })
}

budgetController.list = (req,res) =>{
    Budget.find({userId : req.user._id})
    .then((budget)  =>{
        res.json(budget)
    })
    .catch((err) =>{
        res.json(err)
    })
}

budgetController.update = (req,res) =>{
    const id = req.params.id
    const data = req.body
    Budget.findOneAndUpdate({_id : id, userId : req.user._id},data,{ new : true, runValidators : true})
    .then((budget) =>{
        res.json(budget)
    })
    .catch((err) =>{
        res.json(err)
    })
}

budgetController.delete = (req,res) =>{
    const id = req.params.id
    Budget.findOneAndDelete({_id : id, userId : req.user._id})
    .then((budget) =>{
        res.json(budget)
    })
    .catch((err) =>{
        res.json(err)
    })
}

module.exports = budgetController
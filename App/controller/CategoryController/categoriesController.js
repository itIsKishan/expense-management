const categoriesController = {}
const jwt = require('jsonwebtoken')
const Category = require('../../models/Catogariesmodel/categoriesModel')

categoriesController.create = (req,res) =>{
    let data = req.body
    const category = new Category(data)
    category.userId = req.user._id
    category.save()
    .then((category) =>{
        res.json(category)
    })
    .catch((err) =>{
        res.json(err)
    })
}

categoriesController.update = (req,res) =>{
    const data = req.body
    const id = req.params.id
    Category.findOneAndUpdate({_id : id, userId : req.user._id},data,{ new : true, runValidators : true})
    .then((category) =>{
        res.json(category)
    })
    .catch((err) =>{
        res.json(err)
    })
}

categoriesController.list = (req,res) =>{
    Category.find({userId : req.user._id})
    .then((categories) =>{
        res.json(categories)
    })
    .catch((err) =>{
        res.json(err)
    })
}

categoriesController.delete = (req,res) =>{
    const id = req.params.id
    Category.findOneAndDelete({_id : id, userId : req.user._id})
    .then((category) =>{
        res.json(category)
    })
    .catch((err) =>{
        res.json(err)
    })

}

module.exports = categoriesController
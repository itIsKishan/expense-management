const authMiddleWare = {}
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require('../../models/UserAuuthModel/userAuthModal')

authMiddleWare.PreRegister = (req,res,next) =>{
    const data = req.body
    bcrypt.genSalt()
    .then((salt) =>{
        bcrypt.hash(data.password,salt)
        .then((encrypt) =>{
            data.password = encrypt
            req.info = data
            next()
        })
        .catch((err) =>{
            res.json(err)
        })
    })
    .catch((err) =>{
        res.json(err)
    })
}

authMiddleWare.authenticate = (req,res,next) =>{
    const token = req.header('Authorization').split(' ')[1]
    let tokenData
    try{
        tokenData = jwt.verify(token,'kishan123')
        User.findById(tokenData._id)
        .then((user) =>{
            req.user = user
            next()
        })
        .catch((err) =>{
            res.json(err)
        })
    }
    catch(e){
        res.json(e)
    }
}

module.exports = authMiddleWare
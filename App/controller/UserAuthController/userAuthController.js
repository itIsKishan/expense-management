const userAuthController = {}
const User = require('../../models/UserAuuthModel/userAuthModal')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

userAuthController.register = (req,res) =>{
    const data = req.info
    const user = new User(data)
    user.save()
    .then((user) =>{
        res.json(user)
    })
    .catch((err) =>{
        res.json(err)
    })
}

userAuthController.show =  (req,res) =>{
   res.json(req.user)
}

userAuthController.login = (req,res) =>{
    const data = req.body
    User.findOne({email : data.email})
    .then((user) =>{
        if(!user){
            res.json({errors : 'invalid email or password'})
        }
        bcrypt.compare(data.password,user.password)
        .then((matched) =>{
            if(matched){
                const tokenData = {
                    _id : user._id,
                    email : user.email,
                    userName : user.userName
                }
                const token = jwt.sign(tokenData,'kishan123',{expiresIn : '2d'})
                res.json({
                    token : `Bearer ${token}`
                })
            } else {
                return 'Invalid password'
            }
        })  
    })
}

module.exports = userAuthController
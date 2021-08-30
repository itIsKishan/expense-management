const bcrypt = require('bcryptjs')
const password = 'kishan@2001'
let result
bcrypt.genSalt()
.then((res) =>{
    console.log(res)
    bcrypt.hash(password,res)
    .then((res) =>{
        result = res
        console.log('response',result)
        bcrypt.compare(password,result)
        .then((rest) =>{
            console.log(rest)
        })
    })
})
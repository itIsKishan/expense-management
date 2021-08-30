const mongoose = require('mongoose')

const ConfigureDB = () =>{
    mongoose.connect('mongodb://localhost:27017/expenseDB',{
        useFindAndModify : true,
        useUnifiedTopology : true,
        useNewUrlParser : true
    })
    .then((res) =>{
        console.log('don\'t worry DB is connected')
    })
    .catch((err) =>{
        console.log('error occured while connecting to DB')
    })
}

module.exports =  ConfigureDB
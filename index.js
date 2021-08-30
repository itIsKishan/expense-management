const express = require('express')
const ConfigureDB = require('./Config/database')
const router = require('./Config/routes')
const app = express()

ConfigureDB()
app.use(express.json())
app.use(router)

app.listen(3075,() =>{
    console.log('i am listening the request...')
})
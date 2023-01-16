const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const router = require('./routes/route')

require('dotenv').config()
//const mongoose = require('mongoose')




// const mongoString = process.env.DATABASE_URL
// mongoose.set('strictQuery', false)
// mongoose.connect(mongoString)
// const database = mongoose.connection

// database.on('error',(error)=>{
//     console.log(error)
// })

// database.once('connected',()=>{
//     console.log("database connected")
// })
app.use(express.json())
app.use(express.static('public'))
app.use('/api',router)

app.get('/',(req,res)=>{
    res.json({name:"AsumahBanda"})
})
const port = 8080;

app.listen(port,()=>{
   
    console.log(`listening on htpp://localhost:${port}`)
})
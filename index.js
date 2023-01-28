const bodyParser = require('body-parser');
const express = require('express');
require('dotenv').config()
const mongoose = require('mongoose');
const quizRouter = require('./routes/quiz_route.js')
const sectionRouter = require('./routes/section_route.js')
require('dotenv')
const app = express();
const connectionString = process.env.DB_URL;
mongoose.connect(connectionString);

const db = mongoose.connection;
mongoose.set('strictQuery', true);
app.use(express.json())
app.use(express.static('public'))
app.use('/quiz', quizRouter)
app.use('/sections', sectionRouter)
   
app.get('/', (req, res) => {
    console.log(req.body)
    res.send("hello")
})
const port = process.env.port || 8080;
db.on('error',(error)=>{
    console.log(error)
})

db.once('connected',()=>{
    app.listen(port,

        console.log(`listening fantastic on htpp://localhost:${port}`)
    )
    
   
})

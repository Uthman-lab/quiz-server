const express = require('express');
//const Model = require('../model/model.js')
const router = express.Router();


const quizes = [{
title: "hello",
sections: [
    {
        name: "first",
        questions: [
            {
                question: "what is my name",
                possibleAnswers: ["Asumah", "Moro", "Razak"],
                answer: "Asumah"
            }
        ]
    }
]
}]

router.post('/post', (req, res) => {
 const q = req.body;
 console.log(req.body.name )
 res.status(201).send(req.body)
})

router.get('/all', (req, res) => {
    res.json(quizes)
})

//Get by ID Method
router.get('/getOne/:id', (req, res) => {
    res.send('Get by ID API')
})

//Update by ID Method
router.patch('/update/:id', (req, res) => {
    res.send('Update by ID API')
})

//Delete by ID Method
router.delete('/delete/:id', (req, res) => {
    res.send('Delete by ID API')
})
module.exports = router;




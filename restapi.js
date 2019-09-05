const express = require('express');
const app = express();

const { db } = require('./db');

//body parser maps incoming data to req.body,
//so we can access JSON data fromreq.body
const bodyParser = require('body-parser');

// Parse incoming requests data
// apply as a middleware for the incomming channel
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req,res)=>{
    res.send('hello peeps!');
});

// get all todos
app.get('/api/todos', (req, res) => {
    res.status(200).send({
      success: 'true',
      message: 'todos retrieved successfully',
      todos: db
    })
});

//create
app.post('/api/todos', (req, res) => {
    if(!req.body.title) {
      return res.status(400).send({
        success: 'false',
        message: 'title is required'
      });
    } else if(!req.body.description) {
      return res.status(400).send({
        success: 'false',
        message: 'description is required'
      });
    }
   const todo = {
     id: db.length + 1,
     title: req.body.title,
     description: req.body.description
   }
   db.push(todo);
   return res.status(201).send({
     success: 'true',
     message: 'todo added successfully',
     todo
   })
});
//use post-man to show


const PORT = 5000;
app.listen(PORT, () =>{
    console.log(`listing on port ${PORT}`);
})
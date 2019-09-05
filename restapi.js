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
    res.status(200).send(db);
});

// get a single todo

app.get('/api/todos/:id', (req, res) => {
    const todo = db.find(t=>t.id === parseInt(req.params.id));
    if(!todo) res.status(400).send('no todo found for given Id');
    res.send(todo);
  });


//create
app.post('/api/todos', (req, res) => {

    //validations
    if(!req.body.title) {
      return res.status(400).send({
        success: 'false',
        message: 'title is required'
      });
    }
   const todo = {
     id: db.length + 1,
     title: req.body.title,
     description: req.body.description
   }
   db.push(todo);
   return res.status(201).send(todo);
});
//use post-man to show



  //delete todo
  app.delete('/api/todos/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
  
    db.map((todo, index) => {
      if (todo.id === id) {
         db.splice(index, 1);
         return res.status(200).send('Todo deleted successfuly');
      }
    });

    return res.status(404).send( 'todo not found');

  });


//update todos
app.put('/api/todos/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    let todoFound;
    let itemIndex;
    db.map((todo, index) => {
      if (todo.id === id) {
        todoFound = todo;
        itemIndex = index;
      }
    });
  
    if (!todoFound) {
      return res.status(404).send({
        success: 'false',
        message: 'todo not found',
      });
    }
  
    if (!req.body.title) {
      return res.status(400).send({
        success: 'false',
        message: 'title is required',
      });
    }
  
    const updatedTodo = {
      id: todoFound.id,
      title: req.body.title || todoFound.title
    };
  
    db.splice(itemIndex, 1, updatedTodo);
  
    return res.status(201).send('todo added successfully');
  });



const PORT = 5000;
app.listen(PORT, () =>{
    console.log(`listing on port ${PORT}`);
})
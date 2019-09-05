const express = require('express');
const app = express();

const { db } = require('./db');

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

const PORT = 5000;
app.listen(PORT, () =>{
    console.log(`listing on port ${PORT}`);
})
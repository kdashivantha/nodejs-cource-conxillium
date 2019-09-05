const express = require('express');
const app = express();

app.get('/', (req,res)=>{
    res.send('hello peeps!');
});

app.listen(3000, () =>{
    console.log('listing on port 3000');
})
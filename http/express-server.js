const express = require('express');
let app = express();

const port = process.env.PORT || 9999;

app.get('/',(req,res)=> {
    res.send('<h1> HELLOO CHATHURA </h1>');
});

app.get('/about', (req,res) => {
    // res.send('<h1> About Path </h1>');
    res.json({'name': "chathura"});
});

app.listen(port);
console.log("Working ...");

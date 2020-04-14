const express = require('express');
let app = express();

app.get('/', (req,res)=> {
    res.send('<h1>  This is main page !!!</h1>');
});

app.get('/post/:id/category:category_id', (req,res) => {  //http://localhost:9999/post/300/category:54  
    
    res.send(`
        <p> Here is your ID ${req.params.id}</p>

        <p> Here is your Category Number ${req.params.category_id}</p>
    `);
});

app.listen(9999);
console.log("Working ...");

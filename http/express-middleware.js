const express = require('express');

let app = express();

app.use('/css', express.static(__dirname + '/public'))

app.use( (req,res,next) => {
    console.log("MiddleWare");
    next();
});

app.get('/', (req,res)=> {

    res.send(`
    
    <html>
  <head>
    <link rel="stylesheet" href="/css/style.css">
    <title>Document</title>
  </head>
  <body>

    <h1>Hello</h1>
  </body>
</html>;

    
    `);
});

app.listen(9999);
console.log("express-middleware.js working ...");
const express = require('express');
const bodyParser = require('body-parser');

let app = express();

app.use(bodyParser.json());   // to check bodyParser ====>    app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended: false}));  // this will resolve the req.body.email || req.body.password undefine problem. this is a functionality of bodyparser to read req data 

app.use('/assets', express.static(__dirname + '/public'))

app.use( (req,res,next) => {
    console.log("MiddleWare");
    next();
});

app.post('/post',(req,res)=>{
  // console.log(`its working post  ${req.body.email} ${req.body.password} `);
  console.log(req.body);
});



app.listen(9999);
console.log("express-middleware.js working ...");
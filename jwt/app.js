require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose'); 
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const app = express();
app.use(express.json());
// app.use(bodyParser.json());
 
// mongoose.Promise = global.Promise;



app.get('/data', authenticateToken, (req,res)=>{

  res.json("data response");

});

app.post('/login', (req,res)=> {

 
  const user = { firstName: req.body.firstName, lastName: req.body.lastName };
  console.log("user    +++++++++++++++++=>", req.body);
  const accessToken = createToken(user);
  res.json({accessToken : accessToken}); 
});


function authenticateToken(req,res,next){
  console.log(`middleware ok`);
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  console.log("token==>",token);

  if(!token) return res.sendStatus(401);
  
  jwt.verify(token, process.env.access_token_secret, (err, user)=> {
    if(err) return res.sendStatus(404) ;
    console.log('user==>',user);
    req.user = user;
    console.log('req.user==>',req.user);
    next();
  });
  
}

var createToken = (user) => {
  return jwt.sign(user, process.env.access_token_secret ,{expiresIn: '20s'});
}

  app.listen(5000, ()=> {
    console.log(`server  listen port 5000`);
});
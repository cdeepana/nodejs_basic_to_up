require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose'); 
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const app = express();
app.use(express.json());
// app.use(bodyParser.json());
 
// mongoose.Promise = global.Promise;

let refreshTokenArray = []

app.get('/data', authenticateToken, (req,res)=>{
  res.json("data response");
});

app.post('/login', (req,res)=> {

  const user = { firstName: req.body.firstName, lastName: req.body.lastName };
  // console.log("user    +++++++++++++++++=>", req.body);
  const accessToken = createToken(user);
  const refreshToken = jwt.sign(user, process.env.refresh_token_secret);
  refreshTokenArray.push(refreshToken);
  res.json({accessToken : accessToken, refreshToken : refreshToken}); 
});

app.post('/token', (req, res)=>{
  const refreshToken = req.body.token;
  console.log(" refresh token token method ==> ", refreshToken);
  if(!refreshTokenArray) return res.sendStatus(401);
  if(!refreshTokenArray.includes(refreshToken)) return res.sendStatus(403);
  console.log("token array => ", refreshTokenArray);
  jwt.verify(refreshToken, process.env.refresh_token_secret, (err, user)=>{
    if(err) return err;
    console.log("user  ==> ", user);
    const accessToken = createToken({name : user.lastName});
    // console.log("accessToken ==> after refresh -->", accessToken);
    res.json({accessToken : accessToken});
  });
});

app.delete('/logout', (req,res)=> {
  refreshTokenArray = refreshTokenArray.filter(token => token !== req.body.token);   // 3 !== '3' // true     4 !== 3   // true   (The non-identity operator returns true if the operands are not equal and/or not of the same type.)
  res.sendStatus(204);
});


function authenticateToken(req,res,next){
  console.log(`middleware ok`);
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  // console.log("token==>",token);
  if(!token) return res.sendStatus(401);
  jwt.verify(token, process.env.access_token_secret, (err, user)=> {
    if(err) return res.sendStatus(404);
    // console.log('user==>',user);
    req.user = user;
    // console.log('req.user==>',req.user);
    next();
  });
}

var createToken = (user) => {
  return jwt.sign(user, process.env.access_token_secret ,{expiresIn: '20s'});
}

  app.listen(5000, ()=> {
    console.log(`server  listen port 5000`);
});
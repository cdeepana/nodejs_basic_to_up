const mongoose = require('mongoose');  // mongoose is odm == object document mapper
const User = require('./models/User');  // when we have more models use {user, name1, name2}
const express = require('express');
const app = express();
const bodyParser = require('body-parser');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));   // parse application/x-www-form-urlencoded

mongoose.Promise = global.Promise;   // does not take promises. so we want to add promises to this and, mongoose have their own library for promises
// however we add global ES6 js promises to mongoose to this above  line

mongoose.connect('mongodb://localhost:27017/testingMongoose',{ useUnifiedTopology: true , useNewUrlParser: true });
console.log("fsdf");
mongoose.connection
  .once('open', ()=> console.log('mongoose connected'))
  .on('error', (err)=> {
    console.log(`could not connect `,err);
  });

  app.get('/', (req,res)=> {
    res.send("hi app")
  });

  app.post('/users',(req, res)=> {

    console.log("req body in post =====> ",req.body);
    const newUser_post = new User({

    firstName: req.body.firstName,
    lastName: req.body.lastName,
    isActive: req.body.isActive

  });

    newUser_post.save().then(savedUser=> {     
      res.send('USER SAVED POST');
    
  }).catch( err=> {
    res.status(404).send('Cannot create user');
  });
  });

  const newUser = new User({

    firstName: 'tharushi',
    lastName: 'sadunika',
    isActive: 1

  });

  // newUser.save().then(savedUser=> {      // this then statement like exec / without then the .save() will not execute.
  //   console.log('data saved !');
  // }).catch();

  const port = 4444 || process.env.PORT;
  app.listen(port, ()=> {
    console.log(`listening port ${port}`);
  });
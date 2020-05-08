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

  // app.get('/', (req,res)=> {
  //   res.send("hi app")
  // });

  app.post('/users',(req, res)=> {     //=====================================================================================-     POST create data

    console.log("req body in post =====> ",req.body);
    const newUser_post = new User({

    firstName: req.body.firstName,
    lastName: req.body.lastName,
    isActive: req.body.isActive

  });

    newUser_post.save().then(savedUser=> {     
      res.status(201).send('USER SAVED POST');
    
  }).catch( err=> {
    res.status(404).send('Cannot create user');
  });
  });


  app.get('/users', (req,res)=> {   // =============================================================================================== GET 
    User.find({}).then(users => {
      res.status(200).send(users);
    }).catch(err => {
      res.status(404).send('NOT FOUND get /users');
    });
  });

  // PUT and PATCH
  // when put usage all field must be send but patch we can update one field of data set using unique id

  app.patch('/users/:id', (req,res)=> {  //======================================================================================= PATCH
    const id = req.params.id;
    const firstName = req.body.firstName;

    // User.findByIdAndUpdate({_id: id}, {$set: {firstName : firstName}}, {new: true}, (err, model)=> {
    //   if(err) {
    //     res.status(404).send('cannot complete');
    //   }
    //   else{
    //     res.status(200).send(model);
    //   }
    // }
    // )                 // this is callback usage and below functionality  is for promises 

    User.findByIdAndUpdate({_id: id}, {$set: {firstName : firstName}}, {new: true}).
    then(responseData => {
        res.status(200).send(responseData);
      }
    ).catch(err => {
      res.status(404).send('NOT FOUND ERROR');
    })
  });



  app.put('/users/:id', (req,res)=> {  //==============================================================================PUT option 01
    const id = req.params.id;
    const reqData = req.body;

    User.findByIdAndUpdate({_id: id}, {$set: reqData}, {new: true}).
    then(responseData => {
        res.status(200).send(responseData);
      }
    ).catch(err => {
      res.status(404).send('NOT FOUND ERROR');
    });
  });

  // app.put('/users/:id', (req,res)=> {  //==============================================================================PUT option 02
  //   const id = req.params.id;
  //   const reqData = req.body;

  //   User.findOne({_id: id}).then(user00001 => {
  //     user00001.firstName = reqData.firstName;
  //     user00001.lastName = reqData.lastName;

  //     user00001.save().then(userSaved => {
  //       res.status(200).send(userSaved);
  //       console.log("saved put data another method");
  //     });
  //   });
  // });
  

  // app.delete('/users/:id', (req,res) => { //===============================================================================DELETE   method 01
  //   const id = req.params.id;

  //   User.findOne({ _id: id}).then(responseData => {
  //     console.log('responseData ==>',responseData);
  //     responseData.remove().then( removedata => {
  //         res.send(removedata)
  //     });
  //   });
  // });

  app.delete('/users/:id', (req,res) => { //===============================================================================DELETE   method 02
    const id = req.params.id;

    User.findOneAndDelete({ _id: id}).then(responseData => {
      res.send(`User ${responseData.firstName} removed`)
    }).catch(err =>{
      res.status(404).send('not found for deletion');
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
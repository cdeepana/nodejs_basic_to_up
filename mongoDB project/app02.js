const mongoose = require('mongoose');  // mongoose is odm == object document mapper
const User = require('./models/User');  // when we have more models use {user, name1, name2}

mongoose.connect('mongodb://localhost:27017/testingMongoose',{ useUnifiedTopology: true , useNewUrlParser: true });
console.log("fsdf");
mongoose.connection
  .once('open', ()=> console.log('mongoose connected'))
  .on('error', (err)=> {
    console.log(`could not connect `,err);
  });

  const newUser = new User({

    firstName: 'tharushi',
    lastName: 'sadunika',
    isActive: 1

  });

  newUser.save((err, dataSaved)=> {     //========================================== create
    if(err)  return console.log(err);

    console.log(dataSaved);
  })
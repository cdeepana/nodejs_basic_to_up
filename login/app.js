const express = require('express');
const app = express();
const mongoose = require('mongoose');
const User = require('./models/Users');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));   // parse application/x-www-form-urlencoded
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/testLogin',{ useNewUrlParser: true,  useUnifiedTopology: true  });

mongoose.connection.once('open' ,()=> {
      console.log("connection was established");
}).on('error', (error01)=> {
    console.log(`can not connect database`, error01);
});


app.post('/register', (req,res)=> { //============================================================================================ CREATE
    const newUser = new User(); 

    newUser.email = req.body.email;
    newUser.password = req.body.password;

    bcrypt.genSalt(8, (err,salt) => {
        if(err) return err;
        
        bcrypt.hash(newUser.password, salt, (err, hash)=>{
            if(err) return err;
            newUser.password = hash;

            console.log(`salt => `,salt, `hash =>`, hash);

            newUser.save().then(savedData => {
                res.status(201).send('USER WAS CREATED');
            }).catch(err => {
                res.send('USER WAS NOT CREATED' + err);
            });
        });
    });
});

app.post('/login', (req, res)=> {
    User.findOne({email: req.body.email}).then(user => {
        if(user){
            bcrypt.compare(req.body.password, user.password, (err,matched)=> {
                console.log("matched => ", matched);
                if(err) return err;

                if(matched){
                    res.status(200).send('USER WAS ABLE TO LOG !!');
                }else{
                    res.send('NOT ABLE TO LOGIN !!');
                }
            });
        }
    });
});

app.get('/', (req, res)=> {
    res.send('Hello testing ok ');
});



app.listen(4000, ()=> {
    console.log(`server  listen port 4000`);
});
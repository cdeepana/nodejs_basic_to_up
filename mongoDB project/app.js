// const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhos:2017/animals',{ useUnifiedTopology: true , useNewUrlParser: true });
// mongoose.connection
//   .once('open', ()=> console.log('mongoose connected'))
//   .on('error', (err)=> {
//     console.log(`could not connect `,err);
//   });
// ==========================================================================================================================
var {MongoClient, ObjectId} = require('mongodb')  //var MongoClient = require('mongodb').MongoClient 

MongoClient.connect('mongodb://localhost:27017',{ useUnifiedTopology: true , useNewUrlParser: true }, function (err, client) {
  if (err) throw err;

  const object = new ObjectId();
  console.log(object);
  console.log("CONNECTED");

  const db = client.db("animals");  // create animal database when if not 

  // //CREATE
  // db.collection("mammals").insertOne(   
  //   {
  //     name: "man3",
  //     legs: 2
  //   },
  //   (err, result) => {
  //     if (err) return console.log(err);
  //     console.log("INSERTED DATA");
  //   }
  // );
// ============================================================================================================
  // //READ
  // db.collection('mammals').find().toArray(function (err, result) {
  //   if (err) throw err

  //   console.log(result)
  // })
// ==========================================================================================================
  // //UPDATE
  // db.collection('mammals').findOneAndUpdate({
  //   _id: new ObjectId('5e993ba0570e7d1ea88d4877')
  // },
  // {
  //   $set: {name : 'updated 2 lion'}
  // }).then((result)=> {
  //   console.log(result);
  // }).catch((err)=> {
  //   console.log(err);
  // });
  // =========================================================================================================
  // DELETE
  // db.collection('mammals').deleteMany({name: 'man3'}).then(res => {
  //   console.log(res);
  // }).catch((err)=> {
  //   console.log(err);
  // });


  // refer more with mongo db documentation
})

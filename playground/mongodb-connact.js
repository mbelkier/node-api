//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) =>{
    if (err){
        return console.log('Unable to MongoDB server');
    }
    console.log('Connected to MongoDB server');
/*
    db.collection('Todos').insertOne({
      text: "something to do",
      completed: false
    }, (err, result) => {
      if (err){
          return console.log('unable to insert todo', err);
      }

      console.log(JSON.stringify(result.ops, undefined, 2));
    });

console.log('Connected to MongoDB server');

    db.collection('users').insertOne({
      name: "marwan belkier",
      age: "25",
      location: "ben ashour",
      _id: 5
    }, (err, result) => {
      if (err){
          return console.log('unable to insert todo', err);
      }

      console.log(JSON.stringify(result.ops, undefined, 2));
    });
*/
    db.close();
});
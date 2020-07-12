//const MongoClient = require('mongodb').MongoClient;
// const {MongoClient, ObjectID} = require('mongodb');

// MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
//     if (err){
//         return console.log('Unable to connect to MongoDB server');
//     }
//     console.log('Connected to MongoDB server');

//     //deleteMany
//     db.collection('Todos').deleteMany({text:'eat pringles'}).then((result) => {
//         console.log(resulte);
//     });

//     //deleteOne
//     db.collection('Todos').deleteOne({text:'eat pringles'}).then((result) => {
//         console.log(resulte);
//     });

//     //findOneAndDelete
//     db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
//         console.log(resulte);
//     });


//     db.collection('users').deleteMany({name:'marwan belkier'});


//     db.collection('users').findOneAndDelete({_id: new ObjectID("")}).then((result) => {
//         console.log(JSON.stringify(result, undefined, 2));
//     });


//     //db.close();
// });
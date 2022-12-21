// const mongoose = require('mongoose');
// mongoose.connect('mongodb://127.0.0.1:27017/test');
//
// const Cat = mongoose.model('Cat', { name: String });
//
// const kitty = new Cat({ name: 'Zildjian' });
// kitty.save().then(() => console.log('meow'));
//
// //
const mongoose = require('mongoose');

mongoose.set('strictQuery', true);
// connecting with database
mongoose.connect("mongodb://127.0.0.1:27017/fruitsDB");

const fruitSchema = new mongoose.Schema({
  name: { //Validation
    type: String,
    required: [true]
  },
  rating: {
    type: Number,
    min: 1,
    max: 10
  },
  review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({
  rating: 10,
  review: "Peaches are so yummy!"
});

// fruit.save().then(() => console.log('meow'));

const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
  favouriteFruit: fruitSchema
});
// const pineapple = new Fruit({
//   name: "Pineapple",
//   score: 9,
//   review: "My Favourite!."
// });
// pineapple.save().then(() => console.log('meow'));

const pear = new Fruit({
  name: "Pear",
  score: 5,
  review: "Good!."
});
pear.save().then(() => console.log('meow'));

const Person = mongoose.model("Person", personSchema);

// const person = new Person({
//   name: "Amy",
//   age: 38,
//   favouriteFruit : pineapple
// });
//
// person.save().then(() => console.log('meow'));
Person.updateOne({_id: "63a2c6054721d18bb09e16ad"},{favouriteFruit: pear}, function(err){
  if (err) {
    console.log(err);
  } else {
    console.log("Succesfully Updated!");
  }
});
//
// const kiwi = Fruit({
//   name: "Kiwi",
//   score: 10,
//   review: "The best Fruit!."
// });
// const orange = Fruit({
//   name: "Orange",
//   score: 4,
//   review: "Too sour for me!."
// });
// const banana = Fruit({
//   name: "Banana",
//   score: 3,
//   review: "Weird texture!."
// });
//insertMany
// Fruit.insertMany([kiwi,orange,banana], function(err){
//   if (err){
//     console.log(err);
//   } else {
//     console.log("Succesfully saved all the fruits to fruitsDB")
//   }
// });
//Update
// Fruit.updateOne({_id: "63a2ede3e1d7d908a5401862" },{name: "Peach"}, function(err){
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Succesfully Updated!");
//   }
// });
//deleteOne
// Fruit.deleteOne({
//   _id: "63a2eb55c02d6be7809e5629"
// }, function(err, fruits) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Borrado");
//   }
// });
//
// Fruit.deleteOne({
//   _id: "63a2ede3e1d7d908a5401862"
// }, function(err, fruits) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Borrado");
//   }
// });

Fruit.find(function(err, fruits) {
  if (err) {
    console.log(err);
  } else {



    fruits.forEach(function(fruit) {
      console.log(fruit.name);
    });

  }
});

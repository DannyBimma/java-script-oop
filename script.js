'use strict';

// OOP (Object Oriented Programming) in JavaScript:
console.log(`OBJECT ORIENTED PROGRAMMING (OOP) IN JAVASCRIPT:`);

// Constructor Functions and the New Operator:
console.log(`CONSTRUCTOR FUNCTIONS AND THE NEW OPERATOR:`);
/*
You can use constructor functions to create objects programmatically with
said function. Constructor functions are no different from other functions,
the only difference is that they are called using the "New" keyword and used 
to create objects.

p.s. It's a naming convention to capitalize the first letter of constructor
functions. Also, arrow functions are not allowed to be used as constructor
functions because they don't have their own "this" keyword.

When you call a constructor function, it creates a new object and returns it
automatically. But before that happens there's a few steps that take place 
behind the scenes.

1. The "New" keyword creates an empty object.
2. The "New" keyword calls the constructor function, and the "this" keyword points to
the empty object.
3. The empty object is linked to the prototype of the constructor function.
4. Then, the constructor returns the empty object. And that empty object is
the object you'll be building.
 */

// Create a constructor function for a person:
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;

  //   console.log(this);
  //   console.log(`${this.firstName} was born in ${this.birthYear}`);

  // Never Do This!!:
  //   this.age = function () {
  //     console.log(2021 - this.birthYear);
  //   };
};

// Call the constructor function to create a new object:
const dan = new Person(`Danny`, 1992);
console.log(dan);

// Create new people objects using the constructor function:
const larissa = new Person(`Isabella`, 1996);
const jt = new Person(`Jessica Torrent`, 1969);
const josh = new Person(`Josh`, 1994);

console.log(larissa);
console.log(jt);
console.log(josh);

// Prototypes:
console.log(`PROTOTYPES:`);
/*
Each and every object in JavaScript has a prototype property. The prototype
property is where we put methods and properties that we want other objects to
inherit.

Every object created with a constructor function will have access to the
methods and properties defined in the constructor function's prototype.

Prototypes are a way to share properties and methods between objects. 
Prototypes are objects that are used as a template for creating new objects.
*/

// Create the age method on the Person prototype:
Person.prototype.age = function () {
  console.log(
    `${this.firstName} is ${
      new Date().getFullYear() - this.birthYear
    } years old.`
  );
};

// Call the age method on the objects created using Person:
dan.age();
larissa.age();
jt.age();
josh.age();

// Create a species property on the Person prototype:
Person.prototype.species = `Homo Sapien`;
console.log(`The entity known as ${dan.firstName} is a ${dan.species}!`);

// Prototypal Inheritance on Built-in Objects:
console.log(`PROTOTYPAL INHERITANCE ON BUILT-IN OBJECTS:`);

// Create a radom array of repeating numbers:
const randomArr = [2, 2, 4, 4, 6, 6, 7, 7, 8, 8, 9, 9];
console.log(randomArr.__proto__);
console.log(randomArr.__proto__ === Array.prototype);

// Create a new method on the Array prototype to find unique values:

// P.s. It's bad practice to create new methods on built-in object!!
// NEVER DO THIS!!

// Array.prototype.unique = function () {
//   const uniqueArr = [];
//   this.forEach(item => {
//     if (!uniqueArr.includes(item)) {
//       uniqueArr.push(item);
//     }
//   });
//   return uniqueArr;
// };

// console.log(randomArr.unique());

// Coding Challenge #1
/* 
1. Use a constructor function to implement a Car. A car has a make and a speed property. 
The speed property is the current speed of the car in kph.

2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new 
speed to the console.

3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to 
the console.

4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 kph
DATA CAR 2: 'Mercedes' going at 95 kph
GOOD LUCK 😀
*/

// 1.
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

// 2.
Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

// 3.
Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

// 4.
const bmw = new Car(`BMW`, 120);
const mercedes = new Car(`Mercedes`, 95);

// Call the methods on the car objects:
bmw.accelerate();
bmw.brake();
bmw.accelerate();
bmw.brake();

mercedes.accelerate();
mercedes.brake();
mercedes.accelerate();
mercedes.brake();

// ES6 Classes:
console.log(`ES6 CLASSES:`);
/*
ES6 classes are essentially syntactic sugar for constructor functions. They
are a new and more eloquent way to create objects in JavaScript. They are
simpler than using a constructor function, and they are a lot more powerful.

P.s. ES6 classes DO NOT work like classes in other languages:
1. ES6 Classes are NOT hoisted
2. ES6 Classes are first-class citizens
3. ES6 Classes are executed in strict mode

In ES6, you can create a class by using the "class" keyword. You can use either
a class expression or class declaration to initialize a class. And they basically
look like constructor functions without arguments.
*/

// Create a class expression:
const Cat = class {};

// Create a class declaration:
class Dog {
  // create the constructor method:
  constructor(breed, age) {
    this.breed = breed;
    this.age = age;
  }
  // create the barkDecibel method:
  barkDecibel() {
    console.log(`A ${this.breed} is barking at ${this.age * 8} decibels!`);
  }

  // create a getter for the age property:
  get birthYear() {
    return new Date().getFullYear() - this.age;
  }

  // create a setter for the breed property:
  set breed(breed) {
    if (breed.includes(` `)) this._breed = breed;
    else console.log(`${breed} is not a valid breed!`);
  }

  // create a getter for the _breed property:
  get breed() {
    return this._breed;
  }
}

// Create a new instance of the Dog class:
const dog = new Dog(`Golden Retriever`, 5);
console.log(dog);

// Call the barkDecibel method on the dog object:
dog.barkDecibel();

// Setters and Getters:
console.log(`SETTERS AND GETTERS:`);
/*
In JavaScript, you can create a "getter" and a "setter" for a properties in all
objects. This is called "property descriptors", and these types of properties 
are known as accessor properties. You use the "get" and "set" keywords to create 
getters and setters.
*/

// Create an object with getters and setters:
const bankAccount = {
  owner: `Dan`,
  transactions: [100, 845, 345, 436, 567, 890],

  // create a getter to get the last transaction:
  get lastTransaction() {
    return this.transactions.slice(-1).pop();
  },

  // create the setter to add a new transaction:
  set lastTransaction(newTransaction) {
    this.transactions.push(newTransaction);
  },
};

// Get the last transaction:
console.log(bankAccount.lastTransaction);

// Set a new transaction:
bankAccount.lastTransaction = 123;
console.log(bankAccount.transactions);

// Call the getter on the dog object:
console.log(dog.birthYear);

// Create a new instance of the Dog class:
const dog2 = new Dog(`Pug`, 2);

// Static Methods:
console.log(`STATIC METHODS:`);
/*
In JavaScript, you can create a method that is not attached to an object, but 
rather attached to the class itself. This is called a static method. Static 
methods are called on the class itself, not on an instance of the class.
*/

// Add a static method to the Person constructor:
Person.greeting = function () {
  console.log(`Howdy partner 👋🏾!! I'm a static method 🗿!!!`);
  console.log(this);
};

// Call the static method on the Person constructor:
Person.greeting();

// Add a static method to the Dog class:
Dog.bark = function () {
  console.log(`The dog is barking 🐶!`);
};

// Call the static method on the Dog class:
Dog.bark();

// Object.create:
console.log(`OBJECT.CREATE:`);
/*
In JavaScript, you can create an object by using the Object.create() method. 
This method creates a new object, and sets the prototype of the new object to 
the specified prototype object. This is a powerful way to create objects, and 
it is often used to create objects that inherit from other objects. 

So you can essentially use object.create() to manually set the prototype of 
an object to any other object.
*/

// Create an object that will be the prototype of the Person objects:
const personPrototype = {
  greeting: function () {
    console.log(`Hello, my name is ${this.name}!`);
  },
};

// Create a new object that inherits from the personPrototype object:
const tina = Object.create(personPrototype);

// Set the name property on the tina object:
tina.name = `Tanisha`;

// Call the greeting method on the tina object:
tina.greeting();

// Coding Challenge #2
/* 
1. Re-create challenge 1, but this time using an ES6 class.

2. Add a getter called 'speedUS' which returns the current speed in 
mph (divide by 1.6).

3. Add a setter called 'speedUS' which sets the current speed in mph 
(but converts it to kph before storing the value, by multiplying the 
input by 1.6).

4. Create a new car and experiment with the accelerate and brake methods, 
and with the getter and setter.

DATA CAR 1: 'Ford' going at 120 kph
GOOD LUCK 😀
*/

// 1.
class Vehicle {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} kph!`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} kph!`);
  }

  // 2.
  get speedUS() {
    return this.speed / 1.6;
  }

  // 3.
  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

// 4.
const car1 = new Vehicle(`Ford`, 120);

// Call the accelerate and brake methods on the car1 object:
car1.accelerate();
car1.brake();

// Get the speed in mph:
console.log(`CAR 1: ${car1.make} going at ${car1.speedUS} mph`);

// Set the speed in mph:
car1.speedUS = 120;
console.log(car1);

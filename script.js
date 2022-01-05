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
The speed property is the current speed of the car in km/h.

2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new 
speed to the console.

3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to 
the console.

4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h
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
}

// Create a new instance of the class:
const dog = new Dog(`Golden Retriever`, 5);
console.log(dog);

// Call the barkDecibel method on the dog object:
dog.barkDecibel();

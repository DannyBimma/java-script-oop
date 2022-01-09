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
    return this;
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} kph!`);
    return this;
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

// Inheritance Between Classes: Constructor Functions:
console.log(`INHERITANCE BETWEEN CLASSES: CONSTRUCTOR FUNCTIONS:`);
/*
In JavaScript, you can create a class that inherits from another class.
*/

// Create a child constructor of the Person constructor called Student:
const Student = function (firstName, birthYear, course, quirk) {
  // this.firstName = firstName;
  // this.birthYear = birthYear;

  // call the Person constructor and manually set the "this" keyword:
  Person.call(this, firstName, birthYear);
  this.course = course;
  this.quirk = quirk;
};

// Allow the Student constructor to inherit from the Person constructor:
Student.prototype = Object.create(Person.prototype);

// Add a prototype method to the Student constructor for student
// introductions:
Student.prototype.introduction = function () {
  console.log(
    `Yo!! My name is ${this.firstName}, and I'm enrolled in the ${this.course} course!!`
  );
};

// Create a new student using the constructor:
const izuku = new Student(`Izuku`, 2006, `UA Hero`, `OneForAll`);
console.log(izuku);

// Call the introduction method on izuku:
izuku.introduction();

// Call the age method on izuku:
izuku.age();

console.log(izuku.__proto__);
console.log(izuku.__proto__.__proto__);

Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);

// Coding Challenge #3
/* 
1. Use a constructor function to implement an Electric Car (called EV) as a CHILD
"class" of Vehicle. Besides a make and current speed, the EV also has the current battery 
charge in % ('charge' property).

2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the 
battery charge to 'chargeTo'.

3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease 
the charge by 1%. Then log a message like this: 'Tesla going at 140 kph, with a charge of 22%'.

4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 
'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'! 
HINT: Review the definition of polymorphism 😉

DATA CAR 1: 'Tesla' going at 120 kph, with a charge of 23%

GOOD LUCK 😀
*/

// 1.
const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

EV.prototype = Object.create(Car.prototype);

// 2.
EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

// 3.
EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge -= 1;
  console.log(
    `This ${this.make} is travelling at ${this.speed}kph with a charge of ${this.charge}%!`
  );
};

// 4.
const BMW = new EV(`BMW i8`, 80, 90);
console.log(BMW);

BMW.accelerate();
BMW.brake();
BMW.accelerate();
BMW.brake();
BMW.chargeBattery(90);
BMW.accelerate();

// Inheritance Between Classes: ES6 Classes:
console.log(`INHERITANCE BETWEEN CLASSES: ES6 CLASSES:`);

// Create a class declaration:
class Human {
  // create the constructor method:
  constructor(govName, birthYear) {
    this.govName = govName;
    this.birthYear = birthYear;
  }
  // create the calcAge instance method:
  calcAge() {
    console.log(`${new Date().getFullYear() - this.birthYear}`);
  }

  // create greeting method:
  greeting() {
    console.log(`Hello ${this.govName}, what is really good?`);
  }

  // create a getter for the age method:
  get age() {
    return new Date().getFullYear() - this.birthYear;
  }

  // create a setter for the govName property:
  set govName(name) {
    if (name.includes(` `)) this._govName = name;
    else
      console.log(
        `❌ERROR❌: "${name}" is not a valid Government sanctioned name!`
      );
  }

  // create a getter for the _govName property:
  get govName() {
    return this._govName;
  }

  // create a static greeting method:
  static greet() {
    console.log(`${this.govName}, we've been expecting you!`);
  }
}

// Create a Student class that inherits from the Human class:
class Hero extends Human {
  constructor(govName, birthYear, heroName) {
    // set the "this" keyword from the parent class:
    super(govName, birthYear);
    // set the "this" keyword:
    this.heroName = heroName;
  }

  // create introduction method:
  introduction() {
    console.log(
      `My name is ${this.govName}, but my hero name is ${this.heroName}!!`
    );
  }
}

// Create a new Hero object:
const bakugo = new Hero(
  `Katsuki Bakugo`,
  2006,
  `Great Explosion Murder God Dynamight`
);

// Call the introduction method on bakugo:
bakugo.introduction();

// Call the calcAge method on bakugo:
bakugo.calcAge();

// Inheritance Between Classes: Object.create:
console.log(`INHERITANCE BETWEEN CLASSES: OBJECT.CREATE:`);

// Create a prototype object:
const shipPrototype = {
  pingMsg: function () {
    console.log(
      `You have made radio contact with M.Y. ${this.shipName}, please state your business!`
    );
  },

  shipID(shipName, flag, regNum) {
    this.shipName = shipName;
    this.flag = flag;
    this.regNum = regNum;
  },
};

// Create a new ship object:
const eclipse = Object.create(shipPrototype);

// Create a new yacht prototype:
const yachtPrototype = Object.create(shipPrototype);

// Add a shipID method to yachtPrototype:
yachtPrototype.shipID = function (shipName, flag, regNum, category) {
  shipPrototype.shipID.call(this, shipName, flag, regNum);
  this.category = category;
};

// Create a new yacht object:
const kingdomCome = Object.create(yachtPrototype);

// Call the ship ID method on kingdomCome:
kingdomCome.shipID(`Kingdom Come`, `🇧🇧`, 246, `Private Yacht`);
console.log(kingdomCome);

// Call the pingMsg method on kingdomCome:
kingdomCome.pingMsg();

// More ES6 Class Examples:
console.log(`MORE ES6 CLASS EXAMPLES:`);

// Create a bank account class:
class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    // encapsulate(protected) pin:
    this.pin = pin;
    this.bank = `Black Billionaires Financial`;
    // encapsulate(protected) transactions data:
    this._transactions = [];
    this.locale = navigator.language;

    // account greetings:
    console.log(
      `A grand welcome ${this.owner}. It's an honor to have you fucking with us here at ${this.bank}✊🏾!!`
    );
    console.log(`This in this block of code is pointing to ${this}`);
  }

  // (The Public Interface of thr Objects (PI)):
  // create withdrawal & deposit methods:
  deposit(amt) {
    this._transactions.push(amt);
    // return .this to make the method "chain-able":
    return this;
  }

  withdrawal(amt) {
    this.deposit(-amt);
    // return .this to make the method "chain-able":
    return this;
  }

  // create loan approval method:
  _loanApproval(amt) {
    return true;
  }

  // create loan request method:
  loanReq(amt) {
    if (this._loanApproval(amt) === true) {
      this.deposit(amt);
      console.log(
        `Congrats ${this.owner}! Your loan totalling ${amt} has been fully approved and instantly deposited to your account.`
      );
    }
    // return .this to make the method "chain-able":
    return this;
  }

  // Create a method to read the transactions:
  readTrans() {
    return this._transactions;
  }
}

// Create a new account object:
const acc0 = new Account(`DannyBimma`, `BDS`, 1246);

// Simulate deposits and withdrawals:
acc0.deposit(8000);
acc0.deposit(4800);
acc0.withdrawal(1800);

// Simulate a loan request:
acc0.loanReq(420000);

// Simulate transactions display:
console.log(acc0.readTrans());

// Chain the "chain-able" methods:
acc0
  .deposit(400000)
  .withdrawal(840)
  .loanReq(840200)
  .withdrawal(240)
  .withdrawal(50)
  .deposit(100);

console.log(acc0);

// Encapsulation: Protected Properties and Methods:
console.log(`ENCAPSULATION: PROTECTED PROPERTIES AND METHODS:`);
/*
When working with object oriented programing in JavaScript. It's essential
to learn data protection best practices when allowing interaction with 
objects containing sensitive data.

Encapsulation achieves this by making some properties and methods private in
a class so they can't be accessed from outside the class. 
*/

// Anyone or code trying to manipulate the property without the _
// will get an error

// acc0.transactions.push(-100);

// Encapsulation: PrivateProperties and Methods:
console.log(`ENCAPSULATION: PRIVATE PROPERTIES AND METHODS:`);
/*
Research JavaScript Class Fields proposal!
*/

// Chaining Methods:
console.log(`CHAINING METHODS:`);
/*
When using Array methods you can make use of chaining methods. This allows
you to do things like calling the filter, map, and reduce methods in a single 
operation. 

Essentially the same concept can be applied to the methods in a class! In order
to achieve this all you need to do is return the object itself at the end of a 
method that you want to be "chain-able."
*/
console.log(acc0.readTrans());

// Coding Challenge #4
console.log(`CODING CHALLENGE #4:`);
/* 
1. Re-create challenge #3, but this time using ES6 classes: 
(create an 'EV' class child class of the 'Vehicle' class).

2. Make the 'charge' property private.

3. Implement the ability to chain the 'accelerate' and 'chargeBattery' methods 
of this class, and also update the 'brake' method in the 'Vehicle' class. 
Then experiment with chaining!

DATA CAR 1: 'Rimac C2' going at 120 km/h, with a charge of 23%
GOOD LUCK 😀
*/

// 1. - 2.
class EV1 extends Vehicle {
  constructor(make, speed, _charge) {
    super(make, speed);
    this._charge = _charge;
  }

  // Create the charge battery method:
  chargeTo(chargeTo) {
    this._charge = chargeTo;
    return this;
  }

  // Create the accelerate method:
  accelerate() {
    this.speed += 20;
    this._charge -= 1;
    console.log(
      `This ${this.make} is travelling at ${this.speed}kph with a charge of ${this._charge}%!`
    );
    return this;
  }
}

// 3.
const rimacC2 = new EV1(`Rimac C2`, 220, 23);

rimacC2
  .accelerate()
  .accelerate()
  .accelerate()
  .accelerate()
  .brake()
  .brake()
  .chargeTo(50)
  .accelerate();

console.log(rimacC2);

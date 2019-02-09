class Person {
  constructor(name = 'Anonymous', age = 0) {
    this.name = name;
    this.age = age;
  }

  getGreeting() {
    //return 'Hi ' + this.name + ', welcome back!';
    return `Hi! I am ${this.name}!`;
  }

  getDescription() {
    return `${this.name} is ${this.age} year(s) old and studies ${this.major}.`;
  }
}

class Student extends Person{
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }

  hasMajor() {
    return !!this.major;
  }

  getDescription() {
    let description = super.getDescription();

    if (this.hasMajor()) {
      description += ` Their major is ${this.major}.`;
    }

    return description;
  }
}

class Traveler extends Person {
  constructor(name, age, homeLocation) {
    super(name, age);
    this.homeLocation = homeLocation;
  }

  hasLocation() {
    return !!this.homeLocation;
  }

  getGreeting() {
    let greeting = super.getGreeting();

    if (this.hasLocation()) {
      greeting += ` I'm visiting from ${this.homeLocation}`;
    }

    return greeting;
  }
}

const me = new Traveler('Jorge Murillo', 33, 'La Ceiba');
console.log(me.getGreeting());

const other = new Traveler();
console.log(other.getGreeting());

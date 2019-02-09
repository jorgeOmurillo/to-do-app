const add = (a, b) => {
  //console.log(arguments);
  return a + b
}

console.log(add(44, 1));

// this keyword
const user = {
  name: 'Jorge',
  cities: ['La Ceiba', 'Taipei'],
  printPlacesLived() {
    return this.cities.map(city => this.name + " has lived in " + city);
  }
};

console.log(user.printPlacesLived());

//Challenge area
const multiplier = {
  numbers: [1,2,3,4,5],
  multiplyBy: 2,
  multiply() {
    return this.numbers.map(num => num * this.multiplyBy);
  }
};

console.log(multiplier.multiply());

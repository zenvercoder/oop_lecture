//  conventional to have capital for constructors
var Dog = function(name){
  //  we use this. a lot in constructors
  this.name = name;
  // a property just describes. It's static
  // can be a string, a boolean, an array
  this.legs = 4;
  // method is a function inside of constructor
  this.bark = function(){
    return "Woof";
  }
}
//  constructors can have both properties and methods

//  this variable of ferdi is an instance of a new Dog
var ferdi = new Dog('Ferdinand');

// console.log(ferdi.legs);

ferdi.legs = 3;

// console.log("Ferdi post-accident= ", ferdi.legs);

var Mug = function(color){
  this.color = color;
  this.fullness = 50;
  this.contents = 'tea';
  this.drink = function(){
    this.fullness -= 10;  }
}
var valMug = new Mug('white');
// console.log('in the beginning, valMug was ', valMug.fullness , '% full');
valMug.drink();
// console.log('after drinking, valMug now ', valMug.fullness , '% full');



var Captain = function(name){
  this.name = name;
  this.education = 'StarFleet Academy';
  // this.ship = 'USS Enterprise';
  this.bff = ' ';
  this.redShirtCount = 3;
  this.newMission = function(){
    this.redShirtCount -= 1;
  }
}

// var Picard = new Captain('Picard');
var Janeway = new Captain('Janeway');
Janeway.bff = '7 of 9';
// Janeway.ship = 'USS Voyager';

console.log('Janeway has a best friend: ', Janeway.bff);
console.log('Janeway has ' + Janeway.redShirtCount + ' crewmembers with red shirts');

Janeway.newMission();

console.log('Janeway took a crew on a rescue mission. Janeway now has: ', + Janeway.redShirtCount + ' crewmembers with red shirts');

// console.log('Janeway was Captain of the ' + Janeway.ship);

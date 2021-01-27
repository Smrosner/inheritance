/* PseudoClassical */

// https://excalidraw.com/#json=4542132522057728,zxXWv0p5MZYDXyqe0gAZyA

/* Constructor function */
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

// add a method to the Person.prototype
Person.prototype.calcAge = function () {
  console.log(2021 - this.birthYear);
};
//Building constructor function for student

// const Student = function (firstName, birthday, course) {
//   this.firstName = firstName;
//   this.birthday = birthday;
//   this.course = course;
// };

//instead of doing block 18 to 22 we could....
const Student = function (firstName, birthYear, course) {
  //Regular function call
  Person.call(this, firstName, birthYear); // ==> line  7 and 8
  this.course = course;
};
//create connection
// this must go before creating a method ... to create the connection
Student.prototype = Object.create(Person.prototype);

//create a method
Student.prototype.intro = function () {
  console.log(
    `Hello, I am ${this.firstName} studying  ${this.course} at Hack Reactor.`
  );
};

//create new student
const mike = new Student("Michael", 1990, "Software Engineering");

// https://excalidraw.com/#json=6480249869041664,j3lNABVyxZ-wMfR7rT3pxg
// https://excalidraw.com/#json=5462487910580224,YwFHsAjRDFk5EAYtQWYt8Q

mike.intro(); // check the console in the browser tools.
mike.calcAge();

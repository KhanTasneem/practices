const person = {
    name: "Tasneem",
    age: 27,
    city: "Delhi",
    greet: function () {
        console.log(`Hello, my name is ${this.name}`);
    },
    country: "India"
}
// for (let key in person) {
//     console.log(key + ": " + person[key]);
// }

// checks if property exists
// console.log("city" in person);
// console.log("profession" in person);

// console.log(Object.keys(person));
// console.log(Object.values(person));
// console.log(Object.entries(person)); // array of arrays[key, value]

// const address = { city: "Mumbai", postalCode: 400001 };
// const updatedPerson = { ...person, ...address };
// console.log(updatedPerson);

// // Freeze the object (make it immutable)
// Object.freeze(person);
// person.age = 30;   // Try to update
// person.state = "Delhi"; // Try to add new property
// console.log(person);

// // Seal the object (allow updates but no new properties)
// Object.seal(person);
// person.age = 28;     // Update existing property
// person.state = "Delhi"; // Try to add new property
// console.log(person);

// // shallow copy-won't change original one
// const copyPerson = { ...person };
// copyPerson.name = "Aisha";
// console.log(copyPerson);
// console.log(person);

const student = {
  name: "Ali",
  age: 20,
  marks: {
    math: 95,
    science: 90
  }
};

// console.log(student);
// console.log(student.marks.math);

// student.getTotalMarks = function() {
//   return this.marks.math + this.marks.science;
// };
// console.log(student.getTotalMarks());

student.marks.english = 88;
// console.log(student.marks);

// for (let subject in student.marks) {
//   console.log(`${subject}: ${student.marks[subject]}`);
// }

delete student.marks.science;
console.log(student.marks);

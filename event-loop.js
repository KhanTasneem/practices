// console.log("Start");
// setTimeout(() => console.log("Timeout"), 1000);
// console.log("End");

// console.log("A");
// setTimeout(() => console.log("B"), 0);
// console.log("C");

// setTimeout(() => console.log("One"), 0);
// setTimeout(() => console.log("Two"), 1000);
// console.log("Three");

// for (var i = 1; i <= 3; i++) {
//   setTimeout(() => console.log(i), 1000);
// }

// for (let i = 1; i <= 3; i++) {
//   setTimeout(() => console.log(i), 1000);
// }

// for (var i = 1; i <= 3; i++) {
//   ((x) => {
//     setTimeout(() => console.log(x), 1000);
//   })(i);
// }

// console.log("First");
// setTimeout(() => console.log("Second"), 0);
// console.log("Third");

// console.log("Start");
// setTimeout(() => console.log("Timeout"), 0);
// Promise.resolve().then(() => console.log("Promise"));
// console.log("End");

// setTimeout(() => {
//   console.log("Outer");
//   setTimeout(() => console.log("Inner"), 0);
// }, 0);

console.log("1");
setTimeout(() => console.log("2"), 0);
Promise.resolve().then(() => console.log("3"));
console.log("4");
setTimeout(() => console.log("5"), 0);
Promise.resolve().then(() => console.log("6"));
console.log("7");



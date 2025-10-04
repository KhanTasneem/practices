// // Problem 1: Counter Function
// // Create a function createCounter that returns two functions:
// // increment() → increases the count by 1 and returns the new count
// // decrement() → decreases the count by 1 and returns the new count
// const createCounter=()=>{
//     let count=0;
//     const increment=()=>{
//         count++;
//         return count;
//     }
//     const decrement=()=>{
//         count--;
//         return count;
//     }
//     return {increment, decrement}
// }
// const counter=createCounter();
// console.log(counter.increment());
// console.log(counter.increment());
// console.log(counter.decrement());


// // Problem 2: Function Once
// // Write a function once(fn) that takes another function fn as input and returns a new function.
// // The returned function should call fn only the first time it is invoked.
// // On subsequent calls, it should return the result from the first call without re-executing fn.
// // Example:
// const sayHelloOnce = once(() => "Hello!");
// sayHelloOnce(); // "Hello!"
// sayHelloOnce(); // "Hello!" (should not call fn again)
// const once=fn=>{
//     return fn
// }
// const sayHelloOnce = once(() => "Hello!");
// sayHelloOnce(); // "Hello!"
// sayHelloOnce(); // "Hello!" (should not call fn again)

// // Problem 3: Delayed Logger
// // Write a function createDelayedLogger(message, delay) that returns a function.
// // When the returned function is called, it should log message to the console after the given delay (in ms).
// // Even if you call the returned function multiple times with different messages, each instance should remember its own message and delay.
// // Example:
// // const logHello = createDelayedLogger("Hello", 1000);
// // const logBye = createDelayedLogger("Bye", 2000);
// // logHello(); // logs "Hello" after 1 second
// // logBye();   // logs "Bye" after 2 seconds
// const createDelayedLogger=(message, delay)=>{
//     return ()=>{
//         setTimeout(()=>{
//             console.log(message)
//         },delay)
//     }
// }
// const logHello = createDelayedLogger("Hello", 1000);
// const logBye = createDelayedLogger("Bye", 5000);
// logHello(); // logs "Hello" after 1 second
// logBye();   // logs "Bye" after 2 seconds

// function outer() {
//   let x = 10;
//   function inner() {
//     return x + 5;
//   }
//   return inner;
// }
// const fn = outer();
// console.log(fn());

// function createCounter() {
//   let count = 0;
//   return function () {
//     count++;
//     return count;
//   };
// }
// const counter1 = createCounter();
// console.log(counter1()); 
// console.log(counter1()); 
// console.log(counter1()); 

// function adder(x) {
//   return function (y) {
//     return x + y;
//   };
// }
// const add5 = adder(5);
// console.log(add5(10));
// console.log(add5(20));

// Q4: Classic Loop + setTimeout
for (var i = 1; i <= 3; i++) {
  setTimeout(() => console.log(i), 1000);
}

// Q5: Fix using let
for (let i = 1; i <= 3; i++) {
  setTimeout(() => console.log(i), 1000);
}

// Q6: Manual Closure Fix
for (var i = 1; i <= 3; i++) {
  (function (x) {
    setTimeout(() => console.log(x), 1000);
  })(i);
}

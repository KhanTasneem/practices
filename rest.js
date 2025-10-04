// // Q.1 Rest with functions
// function multiply(multiplier, ...nums) {
//   return nums.map(n => n * multiplier);
// }
// console.log(multiply(2, 1, 2, 3));

// // Q.2 Rest with array destructuring
// const [x, ...y] = ["a", "b", "c", "d"];
// console.log(x);
// console.log(y);

// // Q.3 Rest with object destructuring
// const user = { id: 1, name: "Tasneem", role: "Developer", country: "India" };
// const { role, ...info } = user;
// console.log(role);
// console.log(info);

// function test(a, b, ...rest) {
//   console.log(a, b, rest);
// }
// test(1, 2, 3, 4, 5);

// const arr = [10, 20, 30, 40];
// const [first, , ...others] = arr;
// console.log(first);
// console.log(others);

// const user = { name: "Tasneem", city: "Mumbai", age: 25, country: "India" };
// const { name, age, ...details } = user;
// console.log(age);
// console.log(details);

// function combine(a, b, ...rest) {
//   return [a, b, ...rest];
// }
// console.log(combine(1, 2, 3, 4, 5));

// const nums = [1, 2, 3];
// const moreNums = [4, 5, ...nums];
// console.log(moreNums);

// function show(...args) {
//   console.log(args.length, args[0], args[args.length - 1]);
// }
// show("a", "b", "c", "d");

// Q10: (Array clone vs reference)
const arr1 = [1, 2, 3];
const arr2 = arr1;
const arr3 = [...arr1];

arr2.push(4);
arr3.push(5);

console.log(arr1);
console.log(arr2);
console.log(arr3);


// Q11: (Object destructuring + rest)
const user = { id: 101, name: "Tasneem", city: "Mumbai" };
const { name, ...others } = user;
console.log(name);
console.log(others);


// Q12: (Spread overriding keys)
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const merged = { ...obj1, ...obj2 };
console.log(merged);

// const nums = [1, 2, 3, 4];
// const result = nums.map(num => num * 2);
// console.log(result);
// // [2, 4, 6, 8]

// const nums = [5, 12, 8, 130, 44];
// const result = nums.filter(num => num > 10);
// console.log(result);
// // [12, 130, 44]

// const nums = [1, 2, 3, 4];
// const result = nums.find(num => num > 2);
// console.log(result);
// // 3

// const arr = [5, 12, 8, 130, 44];
// console.log(arr.findIndex(num => num > 10));   // 1  (12 is first > 10, index = 1)
// console.log(arr.findIndex(num => num > 200));  // -1 (none > 200)


// const nums = [1, 2, 3, 4, 5];
// const result = nums.reduce((acc, curr) => acc + curr, 0);
// console.log(result);
// // 15

// const arr = ["apple", "banana", "cherry"];
// console.log(arr.includes("banana"));
// console.log(arr.includes("grape"));
// // true
// // false

// const arr = ['a', 'b', 'c', 'd', 'e'];
// console.log(arr.slice(2));     // ['c', 'd', 'e']  → takes from index 2 till end
// console.log(arr.slice(1, 4));  // ['b', 'c', 'd']  → takes from index 1 to (4-1)

// const arr = ['Jan', 'March', 'April', 'June'];
// arr.splice(1, 0, 'Feb');
// console.log(arr); // inserts at index 1 → ['Jan', 'Feb', 'March', 'April', 'June']
// arr.splice(4, 1, 'May');
// console.log(arr); // replaces 'June' with 'May' → ['Jan', 'Feb', 'March', 'April', 'May']

// const numbers = [1, 2, 3, 4, 5];
// const result = numbers
//   .filter(num => num % 2 === 0)   // keep only even numbers
//   .map(num => num * num);         // square them
// console.log(result);
// // [4, 16]

// const arr = ["apple", "banana", "cherry"];
// const result = arr.find((fruit) => fruit.startsWith("b"));
// console.log(result);
// // banana

// const arr = [1, 30, 39, 29, 10, 13];
// const result = arr.every((num) => num < 40);
// console.log(result);
// // true

// const arr = [1, 30, 39, 29, 10, 13];
// const result = arr.some((num) => num > 35);
// console.log(result);
// // true

// const arr = [1, 2, [3, 4, [5, 6]]];
// console.log(arr.flat(1));
// // [1, 2, 3, 4, [5, 6]]
// console.log(arr.flat(2));
// // [1, 2, 3, 4, 5, 6]

// // -flatMap(callback) => Combines map() + flat(1) in one go.
// [1, 2, 3].flatMap(x => [x, x * 2]); // [1, 2, 2, 4, 3, 6]
// let words = ["hello world", "I love JS"];
// console.log(words.flatMap(str => str.split(" ")));
// // ["hello", "world", "I", "love", "JS"]

// let arr = [10, 20, 30];
// arr.at(-1); // 30

// [1, 2, 3, 4, 5].findLast(x => x % 2 === 0); // 4


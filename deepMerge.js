function deepMerge(obj1, obj2) {
  // your logic here
  const merged={...obj1, ...obj2};
  return merged
}
const obj1 = { a: 1, b: { x: 10 } };
const obj2 = { b: { y: 20 }, c: 3 };

console.log(deepMerge(obj1, obj2));
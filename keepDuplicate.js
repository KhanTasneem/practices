const duplicateArr = (arr) => {
  const seen = new Set();
  const duplicates = new Set();

  for (let num of arr) {
    if (seen.has(num)) {
      duplicates.add(num); // already seen → it's a duplicate
    } else {
      seen.add(num);
    }
  }

  return [...duplicates]; // convert Set back to array
};

const a = [1, 2, 3, 4, 5, 2, 3, 6];
console.log(duplicateArr(a)); // [2, 3]

//  Merging two arrays of objects with different key structures requires handling key mismatches properly.

const arr1 = [ 
  { id: 1, name: "Alice", age: 25 },
  { id: 2, name: "Bob", age: 30 }
];

const arr2 = [ 
 { id: 2, city: "London", country: "UK" }, 
  { id: 1, city: "New York", country: "USA" }, 
 ];


// Expected Output : 
// [
//   { id: 1, name: "Alice", age: 25, city: "New York", country: "USA" },
//   { id: 2, name: "Bob", age: 30, city: "London", country: "UK" } 
// ]
const mergeArrayByKey=(array1,array2)=>{
    const result=
    array1.map(el1=>array2
        .filter(el2=>el1.id===el2.id 
            && {...el1,...el2}))
    console.log(result)
}
mergeArrayByKey(arr1, arr2);

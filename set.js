// #Set

// // Remove duplicates from [1,2,2,3,4,4,5].
// const arr= [1,2,2,3,4,4,5];
// const uniqueArr=[...new Set(arr)];
// console.log(uniqueArr) // [1,2,3,4,5]

// // Find common elements between [1,2,3,4] and [3,4,5,6].
// const arr1=[1,2,3,4];
// const arr2=[3,4,5,6]
// const set1=new Set(arr1);
// const set2=new Set(arr2);
// const intersection=new Set();
// for(const element of set1){
//     if(set2.has(element)){
//         intersection.add(element)
//     }
// }
// console.log(intersection) // {3,4}

// // Find difference: elements in arr1 but not in arr2.
// const arr1=[1,2,3,4];
// const arr2=[3,4,5,6];
// const set2=new Set(arr2);
// const difference=arr1.filter(num=>!set2.has(num)); // shortcut
// console.log(difference) // [1,2]

// // union of two arrays
// const arr1=[1,2,3,4];
// const arr2=[3,4,5,6];
// const union=new Set([...arr1,...arr2]);
// console.log(union) // {1,2,3,4,5,6}
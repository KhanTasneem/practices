// // Write a function that takes a string and returns it reversed.

// // Input: "hello"
// // Output: "olleh"

// // Input: "Tasneem"
// // Output: "meensaT"

// // const reverseString=(str)=>{
// //     let result=""
// //     for(let i=str.length-1;i>=0;i--){
// //         result+=str[i]
// //     }
// //     return result
// // }

// // const reverseStringUsingRecursion = (str) => {
// //   if (str === "") return "";
// //   return reverseStringUsingRecursion(str.slice(1)) + str[0];
// // };

// const reverseString=(str)=>str.split("").reverse().join("")
// const palindrome=str===reverseString?true:false
// console.log(reverseString("hello"));
// // 


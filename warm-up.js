// conditional statements - if else case
// Q. Print grades based on marks.
// const mark = 70;
// if (mark >= 90) {
//     console.log("Excellent");
// }
// else if (mark >= 80) {
//     console.log("Very Good");
// }
// else if (mark >= 70) {
//     console.log("Good");
// }
// else if (mark >= 60) {
//     console.log("Average");
// }
// else if (mark >= 50) {
//     console.log("Below Average");
// }
// else if (mark >= 40) {
//     console.log("Poor");
// }
// else {
//     console.log("Invalid Mark");
// }   

// loops & conditional
// Q. FizzBuzz (print 1–100, multiples of 3 → "Fizz", multiples of 5 → "Buzz").
// for(let i=1; i<=100; i++){
//     if(i%3==0){
//         console.log("Fizz");
//     }else if(i%5==0){
//         console.log("Buzz");
//     }else{
//         console.log(i);
//     }
// }

// Q. function to Check if a year is leap year.
// const isLeapYear=(year)=>{
//   if (year % 400 === 0) {
//     return true; // divisible by 400 → leap year
//   } else if (year % 100 === 0) {
//     return false; // divisible by 100 but not by 400 → not leap year
//   } else if (year % 4 === 0) {
//     return true; // divisible by 4 → leap year
//   } else {
//     return false; // all other cases → not leap year
//   }
// }
const leapYear=(year)=>(year%400===0) || (year%100!==0 && year%4==0)

const year = 2023;
console.log(leapYear(year)?"Leap year": "Not a leap year");



function isPalindrome(str) {
    // your code here
    str = str.toLowerCase()
    // return str === str.split("").reverse().join("");
    result = str.split("").reverse().join("")
    if(str===result){
      return true
    }
    return false
  }
  
  console.log(isPalindrome("Racecar")); // true
  console.log(isPalindrome("hello"));   // false
  
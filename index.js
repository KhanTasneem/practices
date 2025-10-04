function reverseString(str) {
    // your code here
    let result = ""
    for(let i=str.length-1;i>=0;i--){
      result+=str[i]
    }
    return result
//  return str.split('').reverse().join('');

  }
  
  console.log(reverseString("hello")); // "olleh"
  
  function countVowels(str) {
    // your code here
   const vowels=["a","e","i","o","u"]
    let count = 0
    str=str.toLowerCase();//normalize case - Handle Uppercase Vowels
    for (let char of str) { //for...of Loop (cleaner syntax)
      if(vowels.includes(char)){
        count++
      }
      
    }
    return count
  }
  
  console.log(countVowels("javascript")); // 3
  
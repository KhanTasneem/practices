function findLongestWord(sentence) {
    // your code here
    const arr = sentence.split(" ")
    let longestWord = arr[0]
    for(let word of arr){
      if(word.length > longestWord.length){
        longestWord = word
      }
    }
    return longestWord
  }
  
  console.log(findLongestWord("I am learning JavaScript again")); // "JavaScript"
  
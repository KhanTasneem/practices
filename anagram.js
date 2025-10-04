// Problem 1 : Anagram Groups
// Statement: Given a list of strings, group all the anagrams together.
// Return a list of groups.
// Example Input:
// ["eat", "tea", "tan", "ate", "nat", "bat"]
// Example Output:
// [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]

const a=["eat", "tea", "tan", "ate", "nat", "bat"]
function groupAnagrams(words) {
//   const map = new Map();
  const map = {};
  
  for (let word of words) {
    const sortedKey = word.split("").sort().join(""); // key(sortedKey word by string)
  console.log(map, "map");
    
    // if (!map.has(sortedKey)) {
    //   map.set(sortedKey, []);
//   }
//     map.get(sortedKey).push(word);

    if(!map(sortedKey)){
        map[sortedKey]=[]
    }
    map[sortedKey].push(word)
  }

//   return [...map.values()];
return Object.values() //returns array of values
}

// Example
console.log(groupAnagrams(a));
// [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]

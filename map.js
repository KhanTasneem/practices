// #Map
// Find most frequent word in "this is a test this is only a test".
const sentecnce="this is a test this is only a test";
const words=sentecnce.split(" "); // ["this","is","a","test","this","is","only","a","test"]
const wordCount=new Map(); {}
let freqWord="", freqCount=0;
for(const word of words){ // "this"
    wordCount.set(word,(wordCount.get(word) ||0)+1);
    if(wordCount.get(word)>freqCount){
        freqCount=wordCount.get(word);
        freqWord=word;
    }

}
console.log(`${freqWord}: ${freqCount}`); // test: 2
const mostfrequentWords=[];
for(const [word,count] of wordCount){
    if(count===freqCount) mostfrequentWords.push(word);
}
console.log(mostfrequentWords); // ['this','is','a','test']
// Count vowel frequencies in a string.

// Build a simple dictionary (word → meaning) and query it.
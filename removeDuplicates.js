// function removeDuplicates(arr) {
//     // your code here
//     let result = []
//     arr.forEach(el=>{
//       if(!result.includes(el)){
//         result.push(el)
//       }
//     })
//     // return [... new Set(arr)]
//     return result

//   }
//   function removeDuplicates(arr) {
//   // your logic here
// const uniqueArr = []
// arr.forEach(item=>{
// if(!uniqueArr.includes(item)){
// uniqueArr.push(item)
// }
// })
// return uniqueArr
// }
//   console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // [1, 2, 3, 4, 5]
  
  const removeDuplicateFromArray=(arr)=>{
    const uniqueArr=arr.filter((item, index)=>{
      if(arr.indexOf(item)===index){
        return true
      }
    })
    console.log(uniqueArr);
    
  }

  removeDuplicateFromArray([1, 2, 2, 3, 4, 4, 5])
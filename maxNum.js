function findMax(arr) {
    // your code here
    // return Math.max(...arr)
    maxNum = arr[0]
    for (let num of arr) {
      if(num > maxNum){
        maxNum=num
      }
    }
    return maxNum
}
  
  console.log(findMax([3, 7, 2, 5, 10])); // 10
  
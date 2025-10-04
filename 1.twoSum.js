// check below for leetcode problem 1. Two Sum 
const twoSum = (nums, target) => {
    const res = [];
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                res.push(nums[i], nums[j]);
            }
        }
    }
    return res;
};

// const twoSum=(nums, target)=>{
//     const map=new Map(); // {}
//     for(let i=0; i<nums.length; i++){ // 0 to length=0,1,2,3...
//         const complement=target-nums[i]; //
//         if(map.has(complement)){
//             return [map.get(complement), i]; // found the pair
//         }
//         map.set(nums[i], i); // store current number
//     }
//     // return [...map]
// }
console.log(twoSum([2,7,11,15,5,4], 9))

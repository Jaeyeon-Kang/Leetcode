/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
   let numMap = new Map()
  
    for(let i=0; i<nums.length; i++){
        numMap.set(nums[i], i)
    }
     console.log(numMap)
    for(let i=0; i<nums.length; i++){
        const complement = target-nums[i]
        if(numMap.has(complement) && numMap.get(complement) !== i){
            return [i, numMap.get(complement)]
        }
    }
    console.log(numMap)
};
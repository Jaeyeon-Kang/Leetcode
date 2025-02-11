/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    let countMap = new Map();
    let totalPairs = 0;
    for(let i=0; i<nums.length; i++){
        let x = nums[i]
        if(countMap.has(x)){
            countMap.set(x, countMap.get(x)+1)
        } else {
           countMap.set(x, 1)
        }
    }

     for (let [key, count] of countMap) {
        console.log([key, count])
        if(count>1){
            totalPairs += (count*(count-1))/2
        }
     }

     return totalPairs
};
/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums) {
    let ans = 0;
    for(x of nums){
        x % 3 !== 0 &&  ans++ 
    }
    return ans
};
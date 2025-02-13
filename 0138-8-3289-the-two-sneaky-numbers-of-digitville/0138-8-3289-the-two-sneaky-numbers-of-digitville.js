/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getSneakyNumbers = function(nums) {
    let answer = [];
    for (let i=0; i<nums.length; i++){
        let x = nums[i]
        let index = nums.indexOf(x)
        i !== index ? answer.push(x) : ''
    }
    return answer;
};
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let numMap = new Map();

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        // numMap에 complement가 있는지 확인해본다
        if (numMap.has(complement)) {
            return [numMap.get(complement), i];
        }
        // numMap에 현재 숫자와 인덱스를 추가한다
        numMap.set(nums[i], i);
    }
};
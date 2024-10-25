/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let lt=0;
    let rt=lt+1
    let answer=[]
 
    while(lt<nums.length-1){
        if((nums[lt]+nums[rt]) === target){
            answer.push(lt)
            answer.push(rt)
            return answer;
        } else if (rt < nums.length-1){
            rt++
        } else if(rt === nums.length-1){
            lt++
            rt=lt+1
        }
    }
};
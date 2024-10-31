/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let indexNum = nums.indexOf(target)
    let answer;
    if(indexNum > -1){
        answer = indexNum;
        return answer;
    } else {
        for(let i=0; i<nums.length; i++){
            if(nums[i] > target) {
                //console.log(nums[i], i, target)
                answer = i
                console.log(`answer1: ${answer}`)
                break;
            } else {
                answer=(i+1)
            }
        }   
        console.log(`answer2: ${answer}`)
        return answer;
    }
   
};
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
   let lt=0;
   let rt=nums.length-1
   
   while(lt<=rt){
       let mid = Math.floor((lt+rt)/2) 
       if(nums[mid]===target){
           return mid;
       } else if(nums[mid]<target){
           lt = mid+1
       } else {
           rt = mid - 1;
       }
   }
    return lt;
   
};
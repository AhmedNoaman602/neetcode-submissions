class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
       let firstEl = 0;
       let lastEl = nums.length - 1

       while(firstEl <= lastEl){
            let mid = Math.floor((firstEl + lastEl) / 2);

            if(nums[mid] === target){
                return mid;
            }else if(nums[mid] > target){
                lastEl = mid - 1;
                
            }else if(nums[mid] < target){
                firstEl = mid + 1;
            }
        }
         return -1;
    }
}

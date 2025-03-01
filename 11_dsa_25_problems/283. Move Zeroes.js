// 283. Move Zeroes

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
// Note that you must do this in-place without making a copy of the array.
// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]

// Time complexity: O(n)
// Space complexity: O(1)

var moveZeroes = function (nums) {
  let swapIndex = 0;
  for (let currindex = 0; currindex < nums.length; currindex++) {
    if (nums[currindex] != 0) {
      let temp = nums[currindex];
      nums[currindex] = nums[swapIndex];
      nums[swapIndex] = temp;
      swapIndex++;  
    }
  }
  console.log(nums);
};


moveZeroes([0, 1, 0, 3, 12]); // [1,3,12,0,0]
// Source: leetcode
// Today I am going to show how to solve the Missing Number algorithm problem. This is a simple problem where we have to find the missing number in an array of numbers. The array contains numbers from 0 to n, but one number is missing. We have to find that missing number.

var missingNumber = function (nums) {
  let expectedSum = (nums.length * (nums.length + 1)) / 2;
  // sum of all elements into array
  // let actualSum = nums.reduce((a, b) => a + b, 0);
  let actualSum = 0;
  for (let currindex = 0; currindex < nums.length; currindex++) {
    actualSum += nums[currindex];
  }
  let missingNumber = expectedSum - actualSum;

  return missingNumber;
};

missingNumber([3, 0, 1]); // 2

// 1. Remove Duplicates from Sorted Array (Easy)
// Given a sorted array, remove the duplicates in-place such that each element appears only once.
// Return the new length of the array.
function removeDuplicates(nums: number[]): number[] {
  if(nums.length === 0) return [];
  const sortedArr = nums.sort((a, b) => a - b);
  let left = 0, right = sortedArr.length - 1;
  while(left < right) {
    if(nums[left] === nums[left + 1]) {
      nums.splice(left + 1, 1);
      right--;
    } else left++;
  }
  return nums;
}
// Test Cases
// console.log(removeDuplicates([1, 1, 2, 3, 3, 4])); // Normal Case: [1, 2, 3, 4]
// console.log(removeDuplicates([])); // Edge Case: Empty array

// 2. Two Sum II - Input Array is Sorted (Easy)
// Given a sorted array and a target number, return indices of the two numbers that add up to target.
function twoSumSorted(nums: number[], target: number): any {
  let left = 0, right = nums.length - 1;
  while(left < right) {
    let sum = nums[left] + nums[right];
    if(sum === target) return [left, right];
    else if(sum < target) left++;
    else right--;
  }
  return 'No valid pairs';
}
// Test Cases
// console.log(twoSumSorted([2, 7, 11, 15], 9)); // Normal Case: [0, 1]
// console.log(twoSumSorted([1, 2, 3, 4], 10)); // Edge Case: No valid pairs

// 3. Container With Most Water (Medium)
// Given an array representing heights of vertical lines, find two lines that together with the x-axis form a container that holds the most water.
function maxArea(height: number[]): number {
  let left = 0, right = height.length - 1;
  let max = 0;
  while(left < right) {
    const area = Math.min(height[left], height[right]) * (right - left);
    max = Math.max(max, area);
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return max;
}
// Test Cases
// console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])); // Normal Case
// console.log(maxArea([1, 1])); // Edge Case: Minimal height difference

// 4. Three Sum (Medium)
// Given an integer array, return all unique triplets that sum up to zero.
function threeSum(nums: number[]): number[][] {
  nums.sort((a, b) => a - b);
  const result: number[][] = [];
  for(let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    let left = i + 1, right = nums.length - 1;
    while(left < right) {
      let sum = nums[i] + nums[left] + nums[right];
      if(sum === 0) {
        result.push([nums[i], nums[left], nums[right]])
        while(left < right && nums[left] === nums[left + 1]) left++;
        while(left < right && nums[right] === nums[right - 1]) right--;
        left++;
        right--;

      } else if(sum < 0) {
        left++;
      } else {                
        right--;
      }
    }
  }
  return result;
}
// Test Cases
// console.log(threeSum([-1, 0, 1, 2, -1, -4])); // Normal Case
// console.log(threeSum([0, 0, 0, 0])); // Edge Case: All elements are the same

// 1. Maximum Sum Subarray of Size K (Easy)
// Given an array of integers and an integer K, find the maximum sum of any contiguous subarray of size K.
function maxSumSubarray(arr: number[], k: number): number {
  if (arr.length < k) return 0; 
  let maxSum = 0, windowSum = 0;
  for (let i = 0; i < k; i++) {
    windowSum += arr[i];
  }
  maxSum = windowSum;
  for (let right = k; right < arr.length; right++) {
    windowSum += arr[right] - arr[right - k]; 
    maxSum = Math.max(maxSum, windowSum);
  }
  return maxSum;
}
// Test Cases
// console.log(maxSumSubarray([2, 1, 5, 1, 3, 2], 3)); // Normal Case
// console.log(maxSumSubarray([1, 2], 3)); // Edge Case: k is greater than array length

// 2. Longest Substring Without Repeating Characters (Medium)
// Given a string, find the length of the longest substring without repeating characters.
function lengthOfLongestSubstring(s: string): number {
  const set = new Set();
  let left = 0 ,maxLength = 0;
  for(let right = 0; right < s.length; right++) {
    while(set.has(s[right])) {
      set.delete(s[left])
      left++;
    }
    set.add(s[right]);
    maxLength = Math.max(maxLength, right - left + 1)
  }
  return maxLength;
}
// Test Cases
// console.log(lengthOfLongestSubstring("abcabcbb")); // Normal Case
// console.log(lengthOfLongestSubstring("")); // Edge Case: Empty string

// 3. Longest Repeating Character Replacement (Medium)
// Given a string and an integer K, find the longest substring that can be obtained by replacing at most K characters.
function characterReplacement(s: string, k: number): number {
  const map = new Map();
  let left = 0, maxLength = 0, maxCount = 0;
  for(let right = 0; right < s.length; right++) {
    let char = s[right];
    map.set(char, (map.get(char) || 0) + 1);
    maxCount = Math.max(maxCount, map.get(char));

    if(right - left + 1 - maxCount > k) {
      map.set(s[left], map.get(s[left]) - 1);
      left++;
    }
    maxLength = Math.max(maxLength, right - left + 1);
  }
  return maxLength;
}
// Test Cases
// console.log(characterReplacement("AABABBA", 1)); // Normal Case
// console.log(characterReplacement("A", 2)); // Edge Case: Single character string

// 4. Minimum Window Substring (Hard)
// Given a string S and a string T, find the minimum window in S which contains all characters of T.
function minWindow(s: string, t: string) {
  const mapT = new Map<string, number>();  
  for (const char of t) {
    mapT.set(char, (mapT.get(char) || 0) + 1);
  }
  const mapWindow = new Map<string, number>(); 
  let left = 0, right = 0;
  let minLength = Infinity;
  let start = 0;  

}
// not understanding how to approach this
// Test Cases
// console.log(minWindow("ADOBECODEBANC", "ABC")); // Normal Case
// console.log(minWindow("a", "aa")); // Edge Case: No valid substring

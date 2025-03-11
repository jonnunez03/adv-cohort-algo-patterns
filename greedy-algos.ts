// 1. Assign Cookies (Easy)
// Problem Prompt:
// Given an array `g` representing the greed factor of each child and an array `s` representing the size of each cookie,
// return the maximum number of children who can be content.
// A child will be content if they receive a cookie with a size greater than or equal to their greed factor.
// You can assign at most one cookie per child using a greedy approach.

function findContentChildren(g: number[], s: number[]): number {
  g.sort((a, b) => a - b); 
  s.sort((a, b) => a - b); 
  let child = 0; 
  let cookie = 0; 
  while (child < g.length && cookie < s.length) {
    if (s[cookie] >= g[child]) {
      child++;
    }
    cookie++;
  }
  return child; 
}

// Test Cases
// console.log(findContentChildren([1, 2, 3], [1, 1])); // Normal Case
// console.log(findContentChildren([], [1, 2, 3])); // Edge Case: No children

// 2. Jump Game (Medium)
// Problem Prompt:
// You are given an array `nums` where each element represents the maximum jump length at that position.
// Determine if you can reach the last index starting from index 0.
// Use a greedy approach to maximize the reach.

function canJump(nums: number[]): boolean {
  let maxReach = 0;
  for (let i = 0; i < nums.length; i++) {
    if (i > maxReach) return false; 
    maxReach = Math.max(maxReach, i + nums[i]); 
    if (maxReach >= nums.length - 1) return true; 
  }
  return false;
}

// Test Cases
// console.log(canJump([2, 3, 1, 1, 4])); // Normal Case: Can reach the last index
// console.log(canJump([3, 2, 1, 0, 4])); // Edge Case: Cannot reach last index

// 3. Task Scheduler (Medium)
// Problem Prompt:
// Given a list of tasks represented by characters and an integer `n` representing the cooling period,
// return the least number of units of time required to complete all tasks.
// The same task can only be scheduled again after `n` units of time.
// Use a greedy approach to minimize idle time.

function leastInterval(tasks: string[], n: number) {
  const map = new Map()
  for(let task of tasks) {
    map.set(task, (map.get(task) || 0) + 1);
  }
  let maxCount = 0, maxFreq = 0;
  for(const count of map.values()) {
    if(count > maxFreq) {
      maxFreq = count;
      maxCount = 1;
    } else if(count === maxFreq) {
      maxCount++;
    }
  }
  const partCount = maxFreq - 1;
  const emptySlots = partCount * (n - (maxCount - 1));
  const availableTasks = tasks.length - maxFreq * maxCount;
  const idles = Math.max(0, emptySlots - availableTasks);
  return tasks.length + idles;
}

// Test Cases
// console.log(leastInterval(["A", "A", "A", "B", "B", "B"], 2)); // Normal Case
// console.log(leastInterval(["A", "B", "C", "D"], 0)); // Edge Case: No cooldown period

// 4. Gas Station (Medium)
// Problem Prompt:
// Given two integer arrays `gas` and `cost`, where `gas[i]` is the gas available at station `i`
// and `cost[i]` is the cost to travel from station `i` to the next station,
// return the starting gas station index if you can travel around the circuit once.
// If it's not possible, return -1. Use a greedy approach to find the optimal starting station.

function canCompleteCircuit(gas: number[], cost: number[]): number {
  let totalGas = 0, totalCost = 0, tank = 0, startingStation = 0;
  for(let i = 0; i < gas.length; i++) {
    totalGas += gas[i];
    totalCost += cost[i];
    tank += gas[i] - cost[i];
    if(tank < 0) {
      startingStation = i + 1;
      tank = 0;
    }
  }
  if(totalGas < totalCost) return - 1;
  return startingStation;
}

// Test Cases
console.log(canCompleteCircuit([1, 2, 3, 4, 5], [3, 4, 5, 1, 2])); // Normal Case: Possible circuit
console.log(canCompleteCircuit([2, 3, 4], [3, 4, 3])); // Edge Case: No possible circuit

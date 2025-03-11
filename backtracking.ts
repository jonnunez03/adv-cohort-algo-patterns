// 1. Generate Parentheses (Medium)
// Given an integer n, generate all combinations of well-formed parentheses with n pairs.
function generateParenthesis(n: number): string[] {
  const result: string[] = [];
  const setOpenAndClose = (curVal: string, open: number, close: number): void => {
    if(curVal.length === 2 * n) {
      result.push(curVal);
      return;
    }
    if(open < n) {
      setOpenAndClose(curVal + '(', open + 1, close);
    }
    if(close < open) {
      setOpenAndClose(curVal + ')', open, close + 1); 
    }
  }
  setOpenAndClose('', 0, 0);
  return result;
}
// Test Cases
// console.log(generateParenthesis(3)); // Normal Case
// console.log(generateParenthesis(0)); // Edge Case: No parentheses needed

// 2. Permutations (Medium)
// Given an array of distinct integers, return all possible permutations.
function permute(nums: number[]): number[][] {
  const result: number[][] = [];
  const backtrack = (current: number[]) => {
    if (current.length === nums.length) {
      result.push([...current]); 
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      if (current.includes(nums[i])) continue;
      current.push(nums[i]);
      backtrack(current);
      current.pop();
    }
  };
  backtrack([]);
  return result;
}
// Test Cases
// console.log(permute([1, 2, 3])); // Normal Case
// console.log(permute([])); // Edge Case: Empty array

// 3. Combination Sum (Medium)
// Given an array of integers and a target, return all unique combinations where numbers sum to target.
function combinationSum(candidates: number[], target: number): number[][] {
  const result: number[][] = [];
  const backtrack = (current: number[], start: number, remainingTarget: number) => {
    if (remainingTarget === 0) {
      result.push([...current]);
      return;
    }
    if (remainingTarget < 0) {
      return;
    }
    for (let i = start; i < candidates.length; i++) {
      current.push(candidates[i]);
      backtrack(current, i, remainingTarget - candidates[i]);
      current.pop();
    }
  };
  backtrack([], 0, target);
  return result;
}
// Test Cases
// console.log(combinationSum([2, 3, 6, 7], 7)); // Normal Case
// console.log(combinationSum([2, 4], 7)); // Edge Case: No valid combinations

// 4. Word Search (Medium)
// Given an m x n grid of letters and a word, check if the word exists in the grid using adjacent letters.
function exist(board: string[][], word: string): boolean {
  const rows = board.length;
  const cols = board[0].length;
  const backtrack = (row: number, col: number, index: number): boolean => {
    if (index === word.length) return true;
    if (row < 0 || col < 0 || row >= rows || col >= cols || board[row][col] !== word[index]) {
      return false;
    }
    const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    for (let [dx, dy] of directions) {
      const newRow = row + dx;
      const newCol = col + dy;
      if (backtrack(newRow, newCol, index + 1)) {
        return true;
      }
    }
    return false;
  };
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (board[i][j] === word[0] && backtrack(i, j, 0)) {
        return true;
      }
    }
  }
  return false;
}
// Test Cases
console.log(
  exist(
    [
      ["A", "B", "C", "E"],
      ["S", "F", "C", "S"],
      ["A", "D", "E", "E"],
    ],
    "ABCCED"
  )
); // Normal Case
console.log(exist([["A"]], "B")); // Edge Case: Single letter grid with a different word

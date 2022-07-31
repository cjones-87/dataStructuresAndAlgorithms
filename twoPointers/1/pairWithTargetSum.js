/*
Given an array of sorted numbers and a target sum, find a pair in the array whose sum is equal to the given target. Write a function to return the indices of the two numbers (i.e. the pair) such that they add up to the given target.
*/

const pairWithTargetSum = (array, target) => {
  let left = 0,
    right = array.length - 1;

  while (left < right) {
    let currentSum = array[left] + array[right];

    if (currentSum === target) {
      return [left, right];
    } else {
      currentSum < target ? left++ : right--;
    }
  }
  return [-1, -1];
};

//Time Complexity O(N)
//Space Complexity O(1)

console.log(pairWithTargetSum([1, 2, 3, 4, 6], 6));

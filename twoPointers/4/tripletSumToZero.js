/*
Given an array of unsorted numbers, find all unique triplets in it that add up to zero.

Example 1:

Input: [-3, 0, 1, 2, -1, 1, -2]
Output: [-3, 1, 2], [-2, 0, 2], [-2, 1, 1], [-1, 0, 1]
Explanation: There are four unique triplets whose sum is equal to zero.
Example 2:

Input: [-5, 2, -1, -2, 3]
Output: [[-5, 2, 3], [-2, -1, 3]]
Explanation: There are two unique triplets whose sum is equal to zero.
*/

const tripletSumToZero = (array) => {
  array.sort((a, b) => a - b);
  let triplets = [];

  for (let i = 0; i < array.length; i++) {
    let left = i + 1,
      right = array.length - 1;

    while (left < right) {
      let currentSum = array[left] + array[i] + array[right];
      if (currentSum === 0) {
        triplets.push([array[left], array[i], array[right]]);
        left++;
        right--;
      }

      if (currentSum < 0) {
        left++;
      }
      if (currentSum > 0) {
        right--;
      }
    }
  }

  return triplets;
};

//Time Complexity O(N^2)
//Space Complexity O(N)

console.log(tripletSumToZero([-3, 0, 1, 2, -1, 1, -2])); // => should return [[-3, 1, 2], [-2, 0, 2], [-2, 1, 1], [-1, 0, 1]]

console.log(tripletSumToZero([-5, 2, -1, -2, 3])); // => should return [[-5, 2, 3], [-2, -1, 3]]

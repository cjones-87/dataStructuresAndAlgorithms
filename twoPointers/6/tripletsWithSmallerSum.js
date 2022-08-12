/*
Given an array arr of unsorted numbers and a target sum, count all triplets in it such that arr[i] + arr[j] + arr[k] < target where i, j, and k are three different indices. Write a function to return the count of such triplets.
*/

const smallestSumTriplets = (array, targetSum) => {
  array.sort((a, b) => a - b);

  let count = 0;

  for (let i = 0; i < array.length - 2; i++) {
    let left = i + 1,
      right = array.length - 1;

    while (left < right) {
      let currentSum = array[i] + array[left] + array[right];

      if (currentSum < targetSum) {
        count += right - left;
        left++;
      } else {
        right--;
      }
    }
  }

  return count;
};

//Time Complexity O(N^2)
//Space Complexity O(N)

console.log(smallestSumTriplets([-1, 0, 2, 3], 3)); // => should return 2
console.log(smallestSumTriplets([-1, 4, 2, 1, 3], 5)); // => should return 4
console.log(smallestSumTriplets([-1, 4, 2, 1, 3], 1)); // => should return 0

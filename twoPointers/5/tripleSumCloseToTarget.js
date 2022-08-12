/*
Given an array of unsorted numbers and a target number, find a triplet in the array whose sum is as close to the target number as possible, return the sum of the triplet. If there are more than one such triplet, return the sum of the triplet with the smallest sum.
*/

const closestTripletSum = (array, targetSum) => {
  array.sort((a, b) => a - b);

  let smallestDifference = Infinity;

  for (let i = 0; i < array.length - 2; i++) {
    let left = i + 1,
      right = array.length - 1;

    while (left < right) {
      let currentDifference = targetSum - array[i] - array[left] - array[right];

      if (currentDifference === 0) {
        return targetSum;
      }

      if (Math.abs(currentDifference) < Math.abs(smallestDifference)) {
        smallestDifference = currentDifference;
      }

      currentDifference > 0 ? left++ : right--;
    }
  }
  return targetSum - smallestDifference;
};

//Time Complexity O(N^2)
//Space Complexity O(N)

console.log(closestTripletSum([-2, 0, 1, 2], 2)); // => should return 1
console.log(closestTripletSum([-3, -1, 1, 2], 1)); // => should return 0
console.log(closestTripletSum([1, 0, 1, 1], 100)); // => should return 3

console.log(closestTripletSum([1, 0, 1, 100], 100)); // => should return 101

/*
Given an array with positive numbers and a positive target number, find all of its contiguous subarrays whose product is less than the target number.
*/

const subarrayProducts = (array, target) => {
  let ArrayOfSubarrays = [],
    product = 1,
    left = 0;

  for (let right = 0; right < array.length; right++) {
    let subarray = [];
    product *= array[right];

    while (product >= target && left < array.length) {
      product /= array[left];
      left++;
    }

    for (let i = right; i > left - 1; i--) {
      subarray.unshift(array[i]);
      ArrayOfSubarrays.push([...subarray]);
    }
  }

  return ArrayOfSubarrays;
};

//Time Complexity O(N^2)
//Space Complexity O(N)

console.log(subarrayProducts([2, 5, 3, 10], 30)); // should return => [[2], [5], [2, 5], [3], [5, 3], [10]]
console.log(subarrayProducts([8, 2, 6, 5], 50)); // should return => [[8], [2], [8, 2], [6], [2, 6], [5], [6, 5]]

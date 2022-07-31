/*
Given an array of sorted numbers, remove all duplicate number instances from it in-place, such that each element appears only once. The relative order of the elements should be kept the same and you should not use any extra space so that that the solution has a space complexity of O(1). Move all the unique elements at the beginning of the array and after moving return the length of the subarray that has no duplicate in it.
*/

const removeDuplicates = (array) => {
  let left = 0;

  for (let right = 1; right < array.length; right++) {
    if (array[right] !== array[left]) {
      left++;
      array[left] = array[right];
    }
  }
  return left + 1;
};

//Time Complexity O(N)
//Space Complexity O(1)

console.log(removeDuplicates([1, 1, 1, 2, 3, 4, 5, 5, 6])); // => should return 6

console.log(removeDuplicates([1, 1, 1, 2, 3, 4, 5])); // => should return 5

console.log(removeDuplicates([1, 1, 1, 1, 1, 1])); // => should return 1

console.log(removeDuplicates([1, 1, 1, 1, 1, 2, 2])); // => should return 2

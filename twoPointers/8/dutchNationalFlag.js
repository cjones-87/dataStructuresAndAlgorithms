/*
Given an array containing 0s, 1s and 2s, sort the array in-place. You should treat numbers of the array as objects, hence, we can’t count 0s, 1s, and 2s to recreate the array. The flag of the Netherlands consists of three colors: red, white and blue; and since our input array also consists of three different numbers that is why it is called Dutch National Flag problem.
*/

const dutchNationalFlag = (array) => {
  let low = 0,
    middle = 0,
    high = array.length - 1;

  while (middle <= high) {
    if (array[middle] === 0) {
      [array[middle], array[low]] = [array[low], array[middle]];
      middle++;
      low++;
    } else if (array[middle] === 1) {
      middle++;
    } else {
      [array[middle], array[high]] = [array[high], array[middle]];
      high--;
    }
  }
  return array;
};

//Time Complexity O(N)
//Space Complexity O(1)

console.log(dutchNationalFlag([1, 0, 2, 1, 0])); // should return => [0, 0, 1, 1, 2]

console.log(dutchNationalFlag([2, 2, 0, 1, 2, 0])); // should return => [0, 0, 1, 2, 2, 2]

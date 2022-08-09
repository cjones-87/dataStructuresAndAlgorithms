/*
Given a sorted array, create a new array containing squares of all the numbers of the input array in the sorted order.
*/

const makeSquares = (array) => {
  let sortedSquares = new Array(array.length).fill(0),
    left = 0,
    right = array.length - 1;

  for (let i = right; i >= 0; i--) {
    let smaller = Math.abs(array[left]),
      larger = Math.abs(array[right]);

    if (smaller > larger) {
      sortedSquares[i] = smaller ** 2;
      left++;
    } else {
      sortedSquares[i] = larger ** 2;
      right--;
    }
  }
  return sortedSquares;
};

//Time Complexity O(N)
//Space Complexity O(N)

console.log(makeSquares([-3, -2, -1, 0, 1, 2, 3])); // => should return [0, 1, 1, 4, 4, 9, 9]

console.log(makeSquares([-2, -1, 0, 1, 2])); // => should return [0, 1, 1, 4, 4]

console.log(makeSquares([-2, 1, 2, 5, 12])); // => should return [1, 4, 4, 25, 144]

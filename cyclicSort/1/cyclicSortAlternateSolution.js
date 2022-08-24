/*
We are given an array containing n objects. Each object, when created, was assigned a unique number from the range 1 to n based on their creation sequence. This means that the object with sequence number 3 was created just before the object with sequence number 4. Write a function to sort the objects in-place on their creation sequence number in O(n)
O(n)
 and without using any extra space. For simplicity, let’s assume we are passed an integer array containing only the sequence numbers, though each number is actually an object.
*/

const cyclicSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    array[i] = i + 1;
  }
  return array;
};

//Time Complexity O(N)
//Space Complexity O(1)

let test = [3, 1, 5, 4, 2];
console.log(cyclicSort(test)); // should return => [1, 2, 3, 4, 5]

test = [2, 6, 4, 3, 1, 5];
console.log(cyclicSort(test)); // should return => [1, 2, 3, 4, 5, 6]

test = [1, 7, 5, 6, 4, 3, 2];
console.log(cyclicSort(test)); // should return => [1, 2, 3, 4, 5, 6, 7]

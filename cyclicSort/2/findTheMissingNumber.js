/*
We are given an array containing n distinct numbers taken from the range 0 to n. Since the array has only n numbers out of the total n+1 numbers, find the missing number.
*/

const missingNumber = (array) => {
  let i = 0;

  while (i < array.length) {
    let j = array[i];
    array[i] === array[j] ? i++ : ([array[j], array[i]] = [array[i], array[j]]);
  }

  let k = 0;

  for (let element of array) {
    if (element !== k) {
      return k;
    }
    k++;
  }
  return "no missing numbers";
};

//Time Complexity O(N)
//Space Complexity O(N)

console.log(missingNumber([4, 0, 3, 1])); // should return => 2
console.log(missingNumber([8, 3, 5, 2, 4, 6, 0, 1])); // should return => 7
console.log(missingNumber([4, 0, 3, 1, 2])); // should return =>  "no missing numbers"

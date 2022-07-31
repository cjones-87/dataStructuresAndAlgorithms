/*A number is considered a "happy" number if, after repeatedly replacing it with a number equal to the sum of the square of all of its digits, it leads us to the number ‘1’. Non "happy" numbers will never reach ‘1’. Instead, they will be stuck in a cycle of numbers which will never include ‘1’.

Example 1:

Input: 23   
Output: true (23 is a happy number)  
Explanations: Here are the steps to find out that 23 is a happy number:
1) 2^2 + 3 ^2 = 4 + 9 = 13
2) 1^2 + 3^2 = 1 + 9 = 10
3) 1^2 + 0^2 = 1 + 0 = 1


Example 2:

Input: 12   
Output: false (12 is not a happy number)  
Explanations: Here are the steps to find out that 12 is not a happy number:
1)  1^2 + 2 ^2 = 1 + 4 = 5
2)  5^2 = 25
3)  2^2 + 5^2 = 4 + 25 = 29
4)  2^2 + 9^2 = 4 + 81 = 85
5)  8^2 + 5^2 = 64 + 25 = 89
6)  8^2 + 9^2 = 64 + 81 = 145
7)  1^2 + 4^2 + 5^2 = 1 + 16 + 25 = 42
8)  4^2 + 2^2 = 16 + 4 = 20
9)  2^2 + 0^2 = 4 + 0 = 4
10) 4^2 = 16
11) 1^2 + 6^2 = 1 + 36 = 37
12) 3^2 + 7^2 = 9 + 49 = 58
13) 5^2 + 8^2 = 25 + 64 = 89

Step ‘13’ cycles back to step ‘5’ because our sum of the squares of all digits becomes '89' again. We will never reach ‘1’, hence, ‘12’ is not a "happy" number.
*/

const happyNumber = (number) => {
  let slow = squareDigitsAndAdd(number);
  fast = squareDigitsAndAdd(squareDigitsAndAdd(number));

  while (slow !== fast) {
    slow = squareDigitsAndAdd(slow);
    fast = squareDigitsAndAdd(squareDigitsAndAdd(fast));
  }
  return fast === 1;
};

const squareDigitsAndAdd = (number) => {
  let sum = 0;

  while (number) {
    let currentDigit = number % 10;
    sum += currentDigit ** 2;
    number = Math.floor(number / 10);
  }
  return sum;
};

//Time Complexity O(N)
//Space Complexity O(1)

console.log(happyNumber(23)); // should return true

console.log(happyNumber(12)); // should return false

console.log(happyNumber(10)); // should return true
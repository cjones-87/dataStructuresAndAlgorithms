const happyNumber = (number) => {
  //   let slow = squareDigitsAndAdd(number);
  //   fast = squareDigitsAndAdd(squareDigitsAndAdd(number));
  let slow = number,
    fast = number;
  do {
    slow = squareDigitsAndAdd(slow);
    fast = squareDigitsAndAdd(squareDigitsAndAdd(fast));
  } while (slow !== fast);

  return slow === 1;
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

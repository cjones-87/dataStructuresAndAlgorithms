/*
Given an array of intervals representing ‘N’ appointments, find out if a person can attend all the appointments.
*/

class Interval {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }
}

const canAttend = (intervals) => {
  intervals.sort((a, b) => a.start - b.start);

  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i].start < intervals[i - 1].end) {
      return false;
    }
  }
  return true;
};

//Time Complexity O(N + M) => N & M represent the two input arrays
//Space Complexity O(N)

console.log(
  canAttend([
    // [1, 4],
    // [2, 5],
    // [7, 9]
    new Interval(1, 4),
    new Interval(2, 5),
    new Interval(7, 9),
  ])
);

console.log(
  canAttend([
    // [6, 7], [2, 4], [8, 12]
    new Interval(6, 7),
    new Interval(2, 4),
    new Interval(8, 12),
  ])
);

console.log(
  canAttend([
    // [4, 5], [2, 3], [3, 6]
    new Interval(4, 5),
    new Interval(2, 3),
    new Interval(3, 6),
  ])
);

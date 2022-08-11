/*
Given a list of non-overlapping intervals sorted by their start time, insert a given interval at the correct position and merge all necessary intervals to produce a list that has only mutually exclusive intervals.
*/

class Interval {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }
}

const insertIntervals = (intervals, newInterval) => {
  let merged = [],
    i = 0;

  while (i < intervals.length && newInterval.start > intervals[i].end) {
    merged.push(intervals[i]);
    i++;
  }

  while (i < intervals.length && intervals[i].start <= newInterval.end) {
    newInterval.start = Math.min(newInterval.start, intervals[i].start);
    newInterval.end = Math.max(newInterval.end, intervals[i].end);
    i++;
  }

  merged.push(newInterval);

  while (i < intervals.length) {
    merged.push(intervals[i]);
    i++;
  }

  return merged;
};

let intervalList = [
  new Interval(1, 3),
  new Interval(5, 7),
  new Interval(8, 12),
];

//Time Complexity O(N)
//Space Complexity O(N)

console.log(insertIntervals(intervalList, new Interval(4, 6))); // => should return [[1, 3], [4, 7], [8, 12]]

console.log(insertIntervals(intervalList, new Interval(4, 10))); // => should return[[1, 3], [4, 12]]

intervalList = [new Interval(2, 3), new Interval(5, 7)];

console.log(insertIntervals(intervalList, new Interval(1, 4))); // => should return [[1, 4], [5, 7]]

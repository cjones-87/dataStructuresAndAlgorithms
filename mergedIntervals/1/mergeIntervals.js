/*
Given a list of intervals, merge all the overlapping intervals to produce a list that has only mutually exclusive intervals.
*/

class Interval {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }
}

const mergeIntervals = (intervals) => {
  if (intervals.length < 2) return intervals;

  intervals.sort((a, b) => a.start - b.start);

  let start = intervals[0].start,
    end = intervals[0].end,
    merged = [];

  for (let interval of intervals) {
    let currentStart = interval.start,
      currentEnd = interval.end;

    if (currentStart <= end) {
      end = Math.max(end, currentEnd);
    } else {
      merged.push(new Interval(start, end));
      start = currentStart;
      end = currentEnd;
    }
  }

  merged.push(new Interval(start, end));
  return merged;
};

//Time Complexity O(N * logN) => at most moving through n elements O(N), but sorting also O(N * log N)
//Space Complexity O(N) => we need O(N) space for returning the list of merged intervals & O(N) space also for sorting the interval list

let mergeList = [
  new Interval(6, 9),
  new Interval(8, 13),
  new Interval(1, 4),
  new Interval(2, 5),
];

console.log(mergeIntervals(mergeList)); // should return [[1, 5], [6, 13]]

mergeList = [
  new Interval(7, 9),
  new Interval(10, 13),
  new Interval(1, 4),
  new Interval(5, 6),
];

console.log(mergeIntervals(mergeList)); // should return [[1, 4], [5, 6], [7, 9], [10, 13]]

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
  intervals.push(newInterval);

  intervals.sort((a, b) => a.start - b.start);

  let start = intervals[0].start,
    end = intervals[0].end,
    merged = [];

  for (let interval of intervals) {
    let currentStart = interval.start,
      currentEnd = interval.end;

    if (currentStart <= end) {
      end = Math.max(currentEnd, end);
    } else {
      merged.push([start, end]);
      start = currentStart;
      end = currentEnd;
    }
  }

  merged.push([start, end]);
  return merged;
};

//Time Complexity O(N * logN) => at most moving through n elements O(N), but sorting also O(N * log N)
//Space Complexity O(N) => we need O(N) space for returning the list of merged intervals & O(N) space also for sorting the interval list

let mergeList = [new Interval(1, 3), new Interval(6, 9)];

console.log(insertIntervals(mergeList, new Interval(4, 6))); // => should return [[1, 3], [4, 9]]

mergeList = [new Interval(1, 3), new Interval(6, 9)];

console.log(insertIntervals(mergeList, new Interval(4, 5))); // => should return [[1, 3], [4, 5], [6, 9]]

mergeList = [new Interval(1, 3), new Interval(6, 9)];

console.log(insertIntervals(mergeList, new Interval(3, 6))); // => should return [[1, 9]]

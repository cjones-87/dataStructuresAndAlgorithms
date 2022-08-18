/*
Given two lists of intervals, find the intersection of these two lists. Each list consists of disjoint intervals sorted on their start time.
*/

class Interval {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }
}

const getIntersections = (first, second) => {
  let intersections = [],
    i = 0,
    j = 0;

  while (i < first.length && j < second.length) {
    let firstOverSecond =
      first[i].start >= second[j].start && first[i].start <= second[j].end;
    let secondOverFirst =
      second[j].start >= first[i].start && second[j].start <= first[i].end;

    if (firstOverSecond || secondOverFirst) {
      intersections.push(
        new Interval(
          Math.max(first[i].start, second[j].start),
          Math.min(first[i].end, second[j].end)
        )
      );
    }

    first[i].end < second[j].end ? i++ : j++;
  }

  return intersections;
};

//Time Complexity O(N + M) => N & M represent the two input arrays
//Space Complexity O(N)

console.log(
  getIntersections(
    [new Interval(1, 3), new Interval(5, 6), new Interval(7, 9)],
    [new Interval(2, 3), new Interval(5, 7)]
  )
); // should return => [[2, 3], [5, 6], [7, 7]]

console.log(
  getIntersections(
    [new Interval(1, 3), new Interval(5, 7), new Interval(9, 12)],
    [new Interval(5, 10)]
  )
); // should return => [[5, 7], [9, 10]]

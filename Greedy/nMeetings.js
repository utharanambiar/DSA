let start = [1, 3, 0, 5, 8, 5];
let end = [2, 5, 4, 7, 9, 9];
let ans = [];
let meetings = [];

for (let i = 0; i < end.length; i++) {
  meetings.push({
    starts: start[i],
    ends: end[i],
    index: i + 1,
  });
}

meetings.sort((a, b) => a.ends - b.ends);
let lastEndTime = meetings[0].ends;

ans.push(meetings[0].index);

for (let i = 1; i < meetings.length; i++) {
  if (lastEndTime <= meetings[i].starts) {
    ans.push(meetings[i].index);
    lastEndTime = meetings[i].ends
  }
}

console.log("ans", ans);

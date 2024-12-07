let str = "abcabcc";
var lengthOfLongestSubstring = function (s) {
  //sliding window
  //when a[i] == a[i+1] count =0, pointer = i+1
  // keep reducing count until that char is removed
  let maxCount = 0,
    left = 0,
    ans = [];
  for (let right = 0; right < s.length; right++) {
    while (ans.length > 0 && ans.includes(s[right])) {
      ans.shift();
      left++;
    }
    ans.push(s[right]);
    maxCount = Math.max(maxCount, right - left + 1);
  }
  return maxCount;
};

console.log(lengthOfLongestSubstring(str));

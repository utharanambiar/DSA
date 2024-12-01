let str = "aaabbddccc";

let map = new Map();
for (let i = 0; i < str.length; i++) {
  if (!map.has(str[i])) {
    map.set(str[i], 1);
  } else {
    map.set(str[i], map.get(str[i]) + 1);
  }
}

let ans = "";
for ([key, val] of map) {
  let strVal = val === 1 ? "" : val;
  ans = ans + key + strVal;
}

console.log(ans);


// return length and also consider more than 9 count
/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {
    let idx = 0
    let n = chars.length, count = 0
    for (let i = 0; i < n; i++) {
        let ch = chars[i]
        let count = 0
        while (i < n && chars[i] === ch) {
            count++;
            i++
        }

        if (count === 1) {
            chars[idx++] = ch
        } else {
            chars[idx++] = ch

            //if more than a single digit
            for (let digit of count.toString()) {
                chars[idx++] = digit
            }
        }
        i--
    }
    chars.length = idx
    return idx
};
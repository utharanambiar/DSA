let children = [1, 5, 3, 3, 4],
  cookies = [4, 2, 1, 2, 1, 3];

children.sort();
cookies.sort();

let m = children.length,
  n = cookies.length,
  left = 0,
  right = 0;

while (left < m && right < n) {
  if (cookies[right] >= children[left]) {
    left++;
  }
  right++;
}

console.log(left);

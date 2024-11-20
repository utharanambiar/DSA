let str1 = "({)}[]";
let res = [];

function balanced(str) {
  if (str.length % 2 != 0) {
    return false;
  }
  for (let i = 0; i < str.length; i++) {
    let char = str1.charAt(i);
    if (char == "(" || char == "{" || char == "[") {
      res.push(char);
    } else {
      if (res.length === 0) return true;
      let ch = res.pop();
      if (
        (ch == "(" && char == ")") ||
        (ch == "{" && char == "}") ||
        (ch == "[" && char == "]")
      ) {
        continue;
      } else {
        return false
      }
    }
  }
}

console.log(balanced(str1));

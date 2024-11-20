let str = "Hello to the world";
let ans = [];
let temp = "";
for (let i = 0; i < str.length; i++) {
  let char = str.charAt(i);
  if (char != " ") {
    temp = temp + char;
  }
  if (char == " ") {
    ans.unshift(temp);
    temp = "";
  }
}

if (temp != " ") {
  ans.unshift(temp);
}

console.log(ans.join(" "));

//easy 1 line solution
//console.log(str.split(" ").reverse().join(" "));

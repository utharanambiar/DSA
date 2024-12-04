/**
 * @param {string} s
 * @return {string}
 */
var reverseParentheses = function (s) {
    let stck = []
    for (let i = 0; i < s.length; i++) {
        let ch = s[i]
        let ans = []
        if (ch == ')') {
            // keep popping and adding to ans until an opening bracket is encountered
            while (stck.length > 0 && stck[stck.length - 1] != '(') {
                let char = stck.pop()
                ans.push(char)
            }
            // pop '('
            stck.pop()
            stck.push(...ans)
        } else {
            stck.push(ch)
        }
    }
    return stck.join("")
}; 
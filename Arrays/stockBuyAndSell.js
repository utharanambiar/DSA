let arr = [7, 1, 5, 3, 6, 4];
let minCost = Infinity, maxProfit = 0

for (let i = 0; i < arr.length; i++) {
    minCost = Math.min(minCost, arr[i])
    maxProfit = Math.max(maxProfit, arr[i] - minCost)
}

console.log(maxProfit)

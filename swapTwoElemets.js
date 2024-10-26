let a = 5;
let b = 10;

console.log("Before Swap: a =", a, "b =", b);

// XOR swap
a = a ^ b; // Step 1: a becomes the result of a XOR b
b = a ^ b; // Step 2: b becomes the original value of a
a = a ^ b; // Step 3: a becomes the original value of b

console.log("After Swap: a =", a, "b =", b);
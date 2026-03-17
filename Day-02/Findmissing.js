/*
Problem: Find Missing Number in Range
Day: 2
Language: JavaScript
*/

function missingNumber(arr, n) {
    let total = (n * (n + 1)) / 2;
    let sum = arr.reduce((a, b) => a + b, 0);

    return total - sum;
}
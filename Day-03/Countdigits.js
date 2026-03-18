console.log("Counting")
/*
Problem : Counting digits in giving number or string
Day : 03
Language : JavaScript
*/


function countDigits(n) {
    let count = 0;

    // Handle negative numbers
    n = Math.abs(n);

    // Special case for 0
    if (n === 0) return 1;

    while (n > 0) {
        n = Math.floor(n / 10); // remove last digit
        count++;                // increase count
    }

    return count;
}

console.log(countDigits(12345)); 
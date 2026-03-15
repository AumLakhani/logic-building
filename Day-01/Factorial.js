/*
P2
Problem: Find factorial of a number
Day: 01
Language: JavaScript
*/

function factorial(n) {
    let result = 1;

    for (let i = 1; i <= n; i++) {
        result = result * i;
    }

    console.log("Factorial:", result);
}

factorial(5);
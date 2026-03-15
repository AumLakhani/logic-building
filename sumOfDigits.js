/*
P4
Problem: Write a program to find the sum of digits of a number.
Day:01
language: JavaScript
*/



function sumOfDigits(num) {
    let sum = 0;

    while (num > 0) {
        sum += num % 10;
        num = Math.floor(num / 10);
    }

    console.log(sum);
}

sumOfDigits(398635); 


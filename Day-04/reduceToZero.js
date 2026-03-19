/*
PROBLEM FROM LEETCODE:
PROBLEM: 1342. Number of Steps to Reduce a Number to Zero

Day : 04
Language : JavaScript
*/
var numberOfSteps = function(num) {
    let steps = 0; // to count steps

    while (num > 0) {
        if (num % 2 === 0) {
            num = num / 2; // if even, divide by 2
        } else {
            num = num - 1; // if odd, subtract 1
        }
        steps++; // increase step count
    }

    return steps; // return total steps
};
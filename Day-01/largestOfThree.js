/*
P5
Problem: Given three numbers, find the largest of the three numbers.
Day: 01
Language: JavaScript
*/

let num1 =9;
let num2 = 15;
let num3 = 16;

if(num1 >=num2 && num1 >=num3){
    console.log(`Largest number is num 1 ${num1}`);
}
else if(num2 >=num3 && num2 >=num1){
    console.log(`Largest number is num 2 ${num2}`);
}
else{
    console.log(`Largest number is  num 3 ${num3}`)
}
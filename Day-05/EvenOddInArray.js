/*
Problem : Write a function that takes an array of numbers and separates the even and odd numbers into two different arrays. The function should return an object containing both arrays.
Day:05
Language: JavaScript
*/

function EvenOdd(arr){

    let even = [];
    let odd = [];

    for (let i = 0; i < arr.length; i++){
        if (arr[i]%2===0){
            even.push(arr[i]
            );
        }
        else{
            odd.push(arr[i]);
        }
    }
    console.log("Even numbers:", even);
    console.log("Odd numbers:", odd);
}

EvenOdd([1,2,3.2,3.3,4.5,67,54,32,3,4,7,89,99])
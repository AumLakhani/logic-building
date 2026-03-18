/*
Problem : Find the Second Largest number fro  the Array of the numbers
Day : 03
Language : JavaScript
*/

let ty = [10,50,30,35];
let largest = -Infinity;
let secondlargest = -Infinity;
for(let i =0; i<ty.length;i++){
if(ty[i]>largest){
    secondlargest = largest;
    largest = ty[i];
}
else if (ty[i] > secondlargest && ty[i] < largest) {
        secondlargest = ty[i];
    }
}
console.log(` Secondlargest number is ${secondlargest}`);


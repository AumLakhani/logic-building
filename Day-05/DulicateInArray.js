/*
Problem : Finds duplicate eelements in array
Day:05
Language: JavaScript
*/

console.log("finding Duplicate in Array")

let arr = [1,2,3,4,5,6,7,8,9,1,2,3,4];

let duplicates = [];

for (let i = 0; i < arr.length; i++){
    for (let j = i + 1; j < arr.length; j++){    
        if (arr[i] === arr[j] && !duplicates.includes(arr[i])){   // Taked review by ChatGPT,what used to add to dulicaate
            duplicates.push(arr[i]);
        }
    }
}
console.log("Duplicate elements:", duplicates);
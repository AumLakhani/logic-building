/*
Problem : Anagrams,checking & comparing strings by sorting them
Day:05
Language: JavaScript*/

let str1 = "chorp";
let str2 = "porch";

length1 = str1.length;
length2 = str2.length;

if(length1 !== length2){
    console.log("Not anagrams");
}
else{
    let sortedStr1 = str1.split("").sort().join("");
    let sortedStr2 = str2.split("").sort().join("");

    if(sortedStr1 === sortedStr2){
        console.log("Anagrams is there ");
    }


    else{        console.log("Not anagrams");
    }
}
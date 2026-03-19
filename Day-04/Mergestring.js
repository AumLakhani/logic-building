/*
Problem from LeetCode: 1768. Merge Strings Alternately

Given two strings word1 and word2, merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.
Return the merged string.

Day :04
Language : JavaScript
*/

var mergeAlternately = function(word1, word2) {
    let result = "";   // final merged string
    let i = 0;         // index

    // loop until both strings are fully used
    while (i < word1.length || i < word2.length) {

        // add from word1 if available
        if (i < word1.length) {
            result += word1[i];
        }

        // add from word2 if available
        if (i < word2.length) {
            result += word2[i];
        }

        i++; // move to next index
    }

    return result; // return final string
};
"use strict";
// Double Numbers in an Array: Make a list of a numbers.Then use a trick to make a new list where each number is twice its original value.
//  Start with a list of numbers
let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
// double each number
let doublenumbers = numbers.map(number => number * 2);
// Show the new list of doubled number
console.log(doublenumbers);

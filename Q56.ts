// Keep Only String: Given a mix of different types of items, make a new list that has only the words.
// A mixed bag of items
let mixedArray = [1, "apple", 2, "banana",true, "carrot"];
// Pick out only words
let stringArray = mixedArray.filter(item => typeof item === "string");

// Show the list of just words

console.log(stringArray);

// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// Solution 1:
function reverseString(str) {
  return str.split("").reverse().join("");
}

// or
function reverseStringDotDotDot(str) {
  return [...str].reverse().join("");
}

console.log(reverseString("hello")); // olleh
console.log(reverseStringDotDotDot("mouse")); // esuom

// Solution 2 (using for loop):
function reverseString2(str) {
  // Create an empty string
  let reversed = "";
  // For loop iterating through every character of input string
  // New loop syntax
  for (let character of str) {
    // Add character at the beginning
    reversed = character + reversed;
  }
  return reversed;
}

console.log(reverseString2("mango")); // ognam

// Solution 3 (using reduce method):
function reverseString3(str) {
  return str.split("").reduce((rev, char) => char + rev, "");
}

console.log(reverseString3("glue")); // eulg

// Watch 3. String Reversal -> 4. String Reversal, Solution #3 from Interview SG course
// to understand how this reduce function works.

// EXTRA:

// ES6 notation:
// const stringReverse3 = (str) => str.split("").reverse().join("");
// const stringReverse4 = (str) => [...str].reverse().join("");

// console.log(stringReverse4("my")) // ym

'use strict';

//1 ou probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

// Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"

// function likes(names) {
//   if (names.length === 0) {
//     return 'no one likes this';
//   } else if (names.length === 1) {
//     return `${names[0]} likes this`;
//   } else if (names.length === 2) {
//     return `${names[0]} and ${names[1]} like this`;
//   } else if (names.length === 3) {
//     return `${names[0]}, ${names[1]} and ${names[2]} like this`;
//   } else {
//     return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
//   }
// }

// console.log(likes([]));
// console.log(likes(['Peter']));
// console.log(likes(['Jacob', 'Alex']));
// console.log(likes(['Max', 'John', 'Mark']));
// console.log(likes(['Alex', 'Jacob', 'Mark', 'Max']));
// console.log(likes(['Alex', 'Jacob', 'Mark', 'Max', 'hjkhjk']));

//2 Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

// Your task is to write a function maskify, which changes all but the last four characters into '#'.

// Examples (input --> output):
// "4556364607935616" --> "############5616"
//      "64607935616" -->      "#######5616"
//                "1" -->                "1"
//                 "" -->                 ""

// // "What was the name of your first pet?"
// "Skippy" --> "##ippy"
// "Nananananananananananananananana Batman!" --> "###################################

// const Test = require('@codewars/test-compat');

// describe('maskify', function () {
//   it('should work for some examples', function () {
//     Test.assertEquals(maskify('4556364607935616'), '############5616');
//     Test.assertEquals(maskify('1'), '1');
//     Test.assertEquals(maskify('11111'), '#1111');
//   });
// });

// function maskify(cc) {
//   const ccString = cc.toString();

//   if (ccString.length > 4) {
//     const maskedString = '#'.repeat(ccString.length - 4) + ccString.slice(-4);
//     return maskedString;
//   } else {
//     return cc;
//   }
// }

// console.log(maskify());

//3 Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"

// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

// "The_Stealth-Warrior" gets converted to "TheStealthWarrior"

// function toCamelCase(str) {
//   const regex = /^[a-zA-Z]+([-_][a-zA-Z]+)+$/;

//   if (regex.test(str)) {
//     // Convert to camelCase
//     return str.replace(/[-_][a-zA-Z]/g, function (match) {
//       return match.charAt(1).toUpperCase();
//     });
//   } else {
//     return '';
//   }
// }
// console.log(toCamelCase('fsf-Lsdfsf-fdsdfsa-gfds'));

///////////////////Edabit//////////////////////

//1 function calcAge(age) {
//   return age * 365;
// }
// const calcAge = function (age) {
//   return age * 365;
// };
const calcAge = age => age * 365;
// console.log(calcAge(10));

//2Create a function that takes two numbers as arguments and returns their sum.

// function addition(a, b) {
//   return a + b;
// }

// const addition = function (a, b) {
//   return a + b;
// };

const addition = (a, b) => a + b;
// console.log(addition(5, 6));

//3Write a function that takes an integer minutes and converts it to seconds.

// function convert(minutes) {
//   const seconds = minutes * 60;
//   return seconds;
// }

// const convert = function (minutes) {
//   const seconds = minutes * 60;
//   return seconds;
// };

const convert = minutes => {
  const seconds = minutes * 60;
  return seconds;
};
// console.log(convert(10));

//4 There is a single operator in JavaScript, capable of providing the remainder of a division operation. Two numbers are passed as parameters. The first parameter divided by the second parameter will have a remainder, possibly zero. Return that value.

// function remainder(x, y) {
//   return x % y;
// }

// const remainder = function (x, y) {
//   return x % y;
// };

const remainder = (x, y) => x % y;

// console.log(remainder(10, 4));

//5 Create a function that takes voltage and current and returns the calculated power.

const circuitPower = (voltage, current) => voltage * current;

//6Check if One Array can be Nested in Another
// Create a function that returns true if the first array can be nested inside the second and false otherwise.

// arr1 can be nested inside arr2 if:

// arr1's min is greater than arr2's min.
// arr1's max is less than arr2's max.

// Examples
// canNest([1, 2, 3, 4], [0, 6]) ➞ true

// canNest([3, 1], [4, 0]) ➞ true

// canNest([9, 9, 8], [8, 9]) ➞ false

// canNest([1, 2, 3, 4], [2, 3]) ➞ false

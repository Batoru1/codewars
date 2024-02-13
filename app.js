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

//4 Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

// Examples
// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -->  ""

// const string1 = 'is2 Thi1s T4est 3a';
// const string2 = '4of Fo1r pe6ople g3ood th5e the2';

// function myArray(string) {
//   // return string.split(' ');
//   const arr = string.split(' ');
//   for (let i = 0; i < arr.length; i++) {}
// }

// console.log(myArray(string1));
//no finito//

//5 Digital root is the recursive sum of all the digits in a number.

// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

// Examples
//     16  -->  1 + 6 = 7
//    942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2

function digitalRoot(n) {
  if (n > 9) {
    const seperateNumbers = n
      .toString()
      .split('')
      .map(n => parseInt(n));
    // return seperateNumbers;
    const [x, y, ...rest] = seperateNumbers;
    console.log(x, y, rest);
    // function sumOfArr(seperateNumbers) {
    //   let sum = 0;
    //   for (let i = 0; i < seperateNumbers.length; i++) {
    //     sum += seperateNumbers[i];
    //     return sumOfArr;
    //     console.log(sumOfArr);
    //   }
    // }
  } else {
    return n;
  }
}
console.log(digitalRoot(120));

//The toString() method converts the number to a string.
// The split('') method splits the string into an array of individual characters.
// The map() method is used to iterate over each character (digit) in the array and convert it back to a number using parseInt().
// The resulting array contains each digit of the original number as separate elements.

let challenge = '30 Days Of JavaScript';

// Print the string
console.log(challenge);

// Print the length of the string
console.log(challenge.length);

// Change all characters to capital letters
console.log(challenge.toUpperCase());

// Change all characters to lowercase letters
console.log(challenge.toLowerCase());

// Cut out the first word of the string
console.log(challenge.substr(3)); // Cuts out '30 '

// Slice out the phrase 'Days Of JavaScript' from the string
console.log(challenge.slice(3)); // Cuts out '30 '

// Check if the string contains a word 'Script'
console.log(challenge.includes('Script')); // true

// Split the string into an array
console.log(challenge.split(' ')); // ['30', 'Days', 'Of', 'JavaScript']

// Split the string '30 Days Of JavaScript' at the space
console.log(challenge.split(' ')); // ['30', 'Days', 'Of', 'JavaScript']

// Split the string at the comma and change it to an array
let companies = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
console.log(companies.split(', ')); // ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']

// Change '30 Days Of JavaScript' to '30 Days Of Python'
console.log(challenge.replace('JavaScript', 'Python')); // '30 Days Of Python'

// Character at index 15
console.log(challenge.charAt(15)); // 'J'

// Character code of J
console.log(challenge.charCodeAt(11)); // 74

// Index of first occurrence of 'a'
console.log(challenge.indexOf('a')); // 4

// Last index of occurrence of 'a'
console.log(challenge.lastIndexOf('a')); // 19

// Index of first occurrence of 'because'
let sentence = 'You cannot end a sentence with because because because is a conjunction';
console.log(sentence.indexOf('because')); // 31

// Last index of occurrence of 'because'
console.log(sentence.lastIndexOf('because')); // 47

// Search for the first occurrence of 'because'
console.log(sentence.search('because')); // 31

// Remove trailing whitespace
let stringWithWhitespace = ' 30 Days Of JavaScript ';
console.log(stringWithWhitespace.trim()); // '30 Days Of JavaScript'

// Check if string starts with '30 Days Of'
console.log(challenge.startsWith('30 Days Of')); // true

// Check if string ends with 'JavaScript'
console.log(challenge.endsWith('JavaScript')); // true

// Find all occurrences of 'a'
console.log(challenge.match(/a/g)); // ['a', 'a']

// Concatenate '30 Days of' and 'JavaScript'
console.log('30 Days of '.concat('JavaScript')); // '30 Days Of JavaScript'

// Repeat '30 Days Of JavaScript' 2 times
console.log(challenge.repeat(2)); // '30 Days Of JavaScript30 Days Of JavaScript'

console.log("i just messed up my career");
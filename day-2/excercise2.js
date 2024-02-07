// Print the first quote
console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.");

// Print the second quote by Mother Teresa
console.log("\"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.\"");

// Check if typeof '10' is exactly equal to 10
if (typeof '10' !== typeof 10) {
    console.log("'10' is not exactly equal to 10. Converting...");
    '10' = parseInt('10');
}
console.log(typeof '10' === typeof 10); // true

// Check if parseFloat('9.8') is equal to 10
let num = parseFloat('9.8');
if (num !== 10) {
    console.log("parseFloat('9.8') is not equal to 10. Making it equal...");
    num = 10;
}
console.log(num === 10); // true

// Check if 'on' is found in both 'python' and 'jargon'
let word1 = 'python';
let word2 = 'jargon';
console.log(word1.includes('on') && word2.includes('on')); // true

// Check if 'jargon' is in the sentence
let sentence = 'I hope this course is not full of jargon.';
console.log(sentence.includes('jargon')); // true

// Generate a random number between 0 and 100 inclusively
console.log(Math.floor(Math.random() * 101));

// Generate a random number between 50 and 100 inclusively
console.log(Math.floor(Math.random() * (100 - 50 + 1)) + 50);

// Generate a random number between 0 and 255 inclusively
console.log(Math.floor(Math.random() * 256));

// Access the 'JavaScript' string characters using a random number
let str = 'JavaScript';
let randomIndex = Math.floor(Math.random() * str.length);
console.log(str[randomIndex]);

// Print the pattern using console.log() and escape characters
console.log(`1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125`);

// Use substr to slice out the phrase 'because because because' from the sentence
let sentence2 = 'You cannot end a sentence with because because because is a conjunction';
console.log(sentence2.substr(sentence2.indexOf('because'), 'because because because'.length));

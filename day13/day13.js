//Display the countries array as a table
console.table(countries);


//Display the countries object as table
console.table(countriesObject);


//Use console.group() to group logs
console.group("Grouping Logs");
console.log("Log 1");
console.log("Log 2");
console.log("Log 3");
console.groupEnd();


//10 > 2 * 10 use console.assert()
console.assert(10 > 2 * 10, "Assertion failed: 10 is not greater than 2 times 10");


//Write a warning message using console.warn
console.warn("This is a warning message!");


//Write an error message using console.error(Write an error message using console.error
console.error("This is an error message!");

//Check the speed difference among the following loops: while, for, for of, forEach
const arr = new Array(1000000).fill(0);

// Test speed for while loop
console.time("while loop");
let i = 0;
while (i < arr.length) {
    i++;
}
console.timeEnd("while loop");

// Test speed for for loop
console.time("for loop");
for (let j = 0; j < arr.length; j++) {
    // Do nothing
}
console.timeEnd("for loop");

// Test speed for for...of loop
console.time("for...of loop");
for (const item of arr) {
    // Do nothing
}
console.timeEnd("for...of loop");

// Test speed for forEach loop
console.time("forEach loop");
arr.forEach(item => {
    // Do nothing
});
console.timeEnd("forEach loop");

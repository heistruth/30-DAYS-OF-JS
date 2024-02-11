//Check if the user is old enough to drive
let age = prompt("Enter your age:");
if (age >= 18) {
    console.log("You are old enough to drive.");
} else {
    let yearsLeft = 18 - age;
    console.log(`You are left with ${yearsLeft} years to drive.`);
}


//Compare myAge and yourAge
let myAge = 30;
let yourAge = prompt("Enter your age:");
if (myAge > yourAge) {
    console.log("You are older than me.");
} else if (myAge < yourAge) {
    console.log("I am older than you.");
} else {
    console.log("We are the same age.");
}



//Compare two values using if...else and ternary operator
let a = 4;
let b = 3;

// Using if...else
if (a > b) {
    console.log(`${a} is greater than ${b}`);
} else {
    console.log(`${a} is less than ${b}`);
}

// Using ternary operator
let result = (a > b) ? `${a} is greater than ${b}` : `${a} is less than ${b}`;
console.log(result);


//Check if a number is even or odd
let number = prompt("Enter a number:");
if (number % 2 === 0) {
    console.log(`${number} is an even number.`);
} else {
    console.log(`${number} is an odd number.`);
}


//Give grades to students according to their scores
let score = prompt("Enter your score:");
if (score >= 80 && score <= 100) {
    console.log("Your grade is A");
} else if (score >= 70 && score <= 89) {
    console.log("Your grade is B");
} else if (score >= 60 && score <= 69) {
    console.log("Your grade is C");
} else if (score >= 50 && score <= 59) {
    console.log("Your grade is D");
} else if (score >= 0 && score <= 49) {
    console.log("Your grade is F");
} else {
    console.log("Invalid score entered");
}


// Check Season
let month = prompt("Enter a month:");
switch (month.toLowerCase()) {
    case 'september':
    case 'october':
    case 'november':
        console.log("Autumn");
        break;
    case 'december':
    case 'january':
    case 'february':
        console.log("Winter");
        break;
    case 'march':
    case 'april':
    case 'may':
        console.log("Spring");
        break;
    case 'june':
    case 'july':
    case 'august':
        console.log("Summer");
        break;
    default:
        console.log("Invalid month");
}

//Check if day is weekend or working day
let day = prompt("What is the day today?");
day = day.toLowerCase();
if (day === "saturday" || day === "sunday") {
    console.log(day + " is a weekend.");
} else if (day === "monday" || day === "tuesday" || day === "wednesday" || day === "thursday" || day === "friday") {
    console.log(day + " is a working day.");
} else {
    console.log("Invalid day");
}




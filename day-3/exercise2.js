//Calculate the area of a triangle
let base = prompt("Enter base: ");
let height = prompt("Enter height: ");
let area = 0.5 * base * height;
console.log("The area of the triangle is", area);


//Calculate the perimeter of a triangle
let sideA = prompt("Enter side a: ");
let sideB = prompt("Enter side b: ");
let sideC = prompt("Enter side c: ");
let perimeter = parseFloat(sideA) + parseFloat(sideB) + parseFloat(sideC);
console.log("The perimeter of the triangle is", perimeter);


//Calculate the perimeter of a rectangle
let length = prompt("Enter length: ");
let width = prompt("Enter width: ");
let areaRectangle = length * width;
let perimeterRectangle = 2 * (parseFloat(length) + parseFloat(width));
console.log("The area of the rectangle is", areaRectangle);
console.log("The perimeter of the rectangle is", perimeterRectangle);


//Calculate the area and circumference of a circle
let radius = prompt("Enter radius: ");
const pi = 3.14;
let areaCircle = pi * radius * radius;
let circumference = 2 * pi * radius;
console.log("The area of the circle is", areaCircle);
console.log("The circumference of the circle is", circumference);


//Calculate the slope, x-intercet, and y-intercept of y = 2x - 2:
let x1 = 2;
let y1 = 2;
let x2 = 6;
let y2 = 10;
let slope = (y2 - y1) / (x2 - x1);
console.log("The slope is", slope);

//Calculate the value of y for y = x^2 + 6x + 9
// y = x^2 + 6x + 9
// y = (x + 3)^2
// y = 0 when (x + 3)^2 = 0 => x = -3
console.log("At x = -3, y is 0.");


//Calculate the pay of a person
let hours = prompt("Enter hours: ");
let ratePerHour = prompt("Enter rate per hour: ");
let weeklyEarning = hours * ratePerHour;
console.log("Your weekly earning is", weeklyEarning);


//Compare the length of your name and family name
let firstName = 'Victor';
let lastName = 'Ed- Buoro';
if (firstName.length > lastName.length) {
    console.log(`Your first name, ${firstName} is longer than your family name, ${lastName}.`);
} else {
    console.log(`Your first name, ${firstName} is shorter than your family name, ${lastName}.`);
}

//Calculate the age differnce
let myAge = 250;
let yourAge = 25;
console.log("I am", myAge - yourAge, "years older than you.");


//Determine if the user is old enough to drive
let birthYear = prompt("Enter birth year: ");
let age = 2024 - birthYear;
if (age >= 18) {
    console.log("You are", age, "years old. You are old enough to drive.");
} else {
    let waitYears = 18 - age;
    console.log(`You are ${age} years old. You will be allowed to drive after ${waitYears} years.`);
}


//Calculate the number of seconds a person can live
let yearsToLive = prompt("Enter number of years you live: ");
let secondsToLive = yearsToLive * 365 * 24 * 60 * 60;
console.log("You lived", secondsToLive, "seconds.");


//Create human-readable time formats
let now = new Date();
console.log(now.getFullYear() + "-" + (now.getMonth() + 1) + "-" + now.getDate() + " " + now.getHours() + ":" + now.getMinutes());
console.log(now.getDate() + "-" + (now.getMonth() + 1) + "-" + now.getFullYear() + " " + now.getHours() + ":" + now.getMinutes());
console.log(now.getDate() + "/" + (now.getMonth() + 1) + "/" + now.getFullYear() + " " + now.getHours() + ":" + now.getMinutes());


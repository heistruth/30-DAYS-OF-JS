//Declare variables and assign values
let firstName = 'Damini';
let lastName = 'Ogulu';
let country = 'Nigeria';
let city = 'Lagos';
let age = 32;
let isMarried = false;
let year = 1997;


//Check data types
console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof country);
console.log(typeof city);
console.log(typeof age);
console.log(typeof isMarried);
console.log(typeof year);

//Type check
console.log(typeof '10' === typeof 10);
console.log(parseInt('9.8') === 10);


//Truthy values
console.log(Boolean(10));
console.log(Boolean("Hello"));
console.log(Boolean([]));


//False valuies
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(null));


//comparison expressions
console.log(4 > 3);
console.log(4 >= 3);
console.log(4 < 3);
console.log(4 <= 3);
console.log(4 == 4);
console.log(4 === 4);
console.log(4 != 4);
console.log(4 !== 4);
console.log(4 != '4');
console.log(4 == '4');
console.log(4 === '4');

//length of strings
console.log("python".length === "jargon".length);

//Expression results
console.log(4 > 3 && 10 < 12);
console.log(4 > 3 && 10 > 12);
console.log(4 > 3 || 10 < 12);
console.log(4 > 3 || 10 > 12);
console.log(!(4 > 3));
console.log(!(4 < 3));
console.log(!(false));
console.log(!(4 > 3 && 10 < 12));
console.log(!(4 > 3 && 10 > 12));
console.log(!(4 === '4'));


//Check for 'on' in strings
console.log(!('dragon'.includes('on') || 'python'.includes('on')));


//Date object
const now = new Date();
console.log("Year toady:", now.getFullYear());
console.log("Month today as a number:", now.getMonth() + 1);
console.log("Date today:", now.getDate());
console.log("Day today as a number:", now.getDay() + 1);
console.log("Hours now:", now.getHours());
console.log("Minutes now:", now.getMinutes());
console.log("Seconds elapsed from January 1, 1970 to now:", now.getTime() / 1000);



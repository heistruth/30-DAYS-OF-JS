const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand'];
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook'];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
];

// Use forEach to console.log each country in the countries array
countries.forEach(country => console.log(country));

// Use forEach to console.log each name in the names array
names.forEach(name => console.log(name));

// Use forEach to console.log each number in the numbers array
numbers.forEach(number => console.log(number));

// Use map to create a new array by changing each country to uppercase in the countries array
const upperCaseCountries = countries.map(country => country.toUpperCase());
console.log(upperCaseCountries);

// Use map to create an array of countries length from countries array
const countriesLength = countries.map(country => country.length);
console.log(countriesLength);

// Use map to create a new array by changing each number to square in the numbers array
const squareNumbers = numbers.map(number => number * number);
console.log(squareNumbers);

// Use map to change each name to uppercase in the names array
const upperCaseNames = names.map(name => name.toUpperCase());
console.log(upperCaseNames);

// Use map to map the products array to its corresponding prices
const productPrices = products.map(product => product.price);
console.log(productPrices);

// Use filter to filter out countries containing 'land'
const countriesContainingLand = countries.filter(country => country.includes('land'));
console.log(countriesContainingLand);

// Use filter to filter out countries having six characters
const countriesWithSixCharacters = countries.filter(country => country.length === 6);
console.log(countriesWithSixCharacters);

// Use filter to filter out countries containing six letters and more
const countriesWithSixOrMoreLetters = countries.filter(country => country.length >= 6);
console.log(countriesWithSixOrMoreLetters);

// Use filter to filter out country start with 'E'
const countriesStartingWithE = countries.filter(country => country.startsWith('E'));
console.log(countriesStartingWithE);

// Use filter to filter out only prices with values
const validPrices = products.filter(product => typeof product.price === 'number');
console.log(validPrices);

// Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items
const getStringLists = array => array.filter(item => typeof item === 'string');
console.log(getStringLists([1, 'two', 3, 'four', 5]));

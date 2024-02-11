// Declare an empty array
let emptyArray = [];

//Declare an array with more than 5 number of elements
let arrayWithNumbers = [1, 2, 3, 4, 5, 6, 7];


//Find the length of your array
console.log("Length of arrayWithNumbers:", arrayWithNumbers.length);


//Get the first item, the middle item and the last item of the array
let firstItem = arrayWithNumbers[0];
let middleItem = arrayWithNumbers[Math.floor(arrayWithNumbers.length / 2)];
let lastItem = arrayWithNumbers[arrayWithNumbers.length - 1];
console.log("First item:", firstItem);
console.log("Middle item:", middleItem);
console.log("Last item:", lastItem);


//Declare an array called mixedDataTypes
let mixedDataTypes = ['hello', 5, true, null, { key: 'value' }];


//find the length of the array
console.log("Length of mixedDataTypes:", mixedDataTypes.length);

// Declare an array variable name itCompanies
let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

// Print the array using console.log()
console.log(itCompanies);

// Print the number of companies in the array
console.log("Number of companies:", itCompanies.length);

// Print the first company, middle and last company
console.log("First company:", itCompanies[0]);
console.log("Middle company:", itCompanies[Math.floor(itCompanies.length / 2)]);
console.log("Last company:", itCompanies[itCompanies.length - 1]);

// Print out each company
itCompanies.forEach(company => console.log(company));

// Change each company name to uppercase one by one and print them out
itCompanies.forEach(company => console.log(company.toUpperCase()));

// Print the array like as a sentence
console.log(itCompanies.join(', ') + " are big IT companies.");

// Check if a certain company exists in the itCompanies array
let companyToCheck = 'Google';
if (itCompanies.includes(companyToCheck)) {
    console.log(companyToCheck + " exists in the array.");
} else {
    console.log(companyToCheck + " is not found.");
}

// Filter out companies which have more than one 'o' without the filter method
let filteredCompanies = itCompanies.filter(company => (company.match(/o/g) || []).length === 1);
console.log("Filtered companies:", filteredCompanies);

// Sort the array using sort() method
itCompanies.sort();
console.log("Sorted array:", itCompanies);

// Reverse the array using reverse() method
itCompanies.reverse();
console.log("Reversed array:", itCompanies);

// Slice out the first 3 companies from the array
console.log("First 3 companies:", itCompanies.slice(0, 3));

// Slice out the last 3 companies from the array
console.log("Last 3 companies:", itCompanies.slice(-3));

// Slice out the middle IT company or companies from the array
console.log("Middle company/companies:", itCompanies.slice(Math.floor(itCompanies.length / 2), Math.ceil(itCompanies.length / 2) + 1));

// Remove the first IT company from the array
itCompanies.shift();
console.log("Array after removing first company:", itCompanies);

// Remove the middle IT company or companies from the array
let middleIndex = Math.floor(itCompanies.length / 2);
itCompanies.splice(middleIndex, 1);
console.log("Array after removing middle company:", itCompanies);

// Remove the last IT company from the array
itCompanies.pop();
console.log("Array after removing last company:", itCompanies);

// Remove all IT companies
itCompanies = [];
console.log("Array after removing all companies:", itCompanies);

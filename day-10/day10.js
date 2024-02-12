const a = [4, 5, 8, 9];
const b = [3, 4, 5, 7];
const countries = ['Finland', 'Sweden', 'Norway'];

// Create an empty set
const emptySet = new Set();

// Create a set containing 0 to 10 using loop
const set0To10 = new Set();
for (let i = 0; i <= 10; i++) {
  set0To10.add(i);
}

// Remove an element from a set
set0To10.delete(5);

// Clear a set
set0To10.clear();

// Create a set of 5 string elements from array
const setOfStrings = new Set(countries);

// Create a map of countries and number of characters of a country
const countryCharCountMap = new Map();
countries.forEach(country => {
  countryCharCountMap.set(country, country.length);
});

// Find a union b
const unionAB = new Set([...a, ...b]);

// Find a intersection b
const intersectionAB = new Set(a.filter(num => b.includes(num)));

// Find a with b
const aWithB = new Set(a.filter(num => !b.includes(num)));

// How many languages are there in the countries object file.
const languagesCount = new Set(countries.map(country => country.length)).size;

// Find the 10 most spoken languages
function mostSpokenLanguages(countries, limit) {
  const languageMap = {};
  countries.forEach(country => {
    const chars = country.split('');
    chars.forEach(char => {
      if (!languageMap[char]) {
        languageMap[char] = 1;
      } else {
        languageMap[char]++;
      }
    });
  });
  const sortedLanguages = Object.entries(languageMap).sort((a, b) => b[1] - a[1]).slice(0, limit);
  const result = sortedLanguages.map(([language, count]) => ({ [language]: count }));
  return result;
}


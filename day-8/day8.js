// Create an empty object called dog
let dog = {};

// Print the dog object on the console
console.log(dog);

// Add name, legs, color, age, and bark properties for the dog object
dog.name = 'Buddy';
dog.legs = 4;
dog.color = 'Golden';
dog.age = 5;
dog.bark = function() {
  return 'woof woof';
};

// Get name, legs, color, age, and bark value from the dog object
console.log(dog.name); // Buddy
console.log(dog.legs); // 4
console.log(dog.color); // Golden
console.log(dog.age); // 5
console.log(dog.bark()); // woof woof

// Set new properties for the dog object: breed, getDogInfo
dog.breed = 'Labrador';
dog.getDogInfo = function() {
  return `${this.name} is a ${this.breed} with ${this.legs} legs, ${this.color} color, and ${this.age} years old.`;
};

console.log(dog.getDogInfo());

// Find the person who has many skills in the users object.
// Assuming users object is defined in the environment

let maxSkills = 0;
let skilledPerson = '';

for (const user in users) {
  if (users[user].skills.length > maxSkills) {
    maxSkills = users[user].skills.length;
    skilledPerson = user;
  }
}

console.log(skilledPerson); // Brook

// Count logged in users, count users having greater than equal to 50 points from the users object
let loggedInUsers = 0;
let usersWith50Points = 0;

for (const user in users) {
  if (users[user].isLoggedIn) {
    loggedInUsers++;
  }
  if (users[user].points >= 50) {
    usersWith50Points++;
  }
}

console.log(loggedInUsers); // 2
console.log(usersWith50Points); // 4

// Find people who are MERN stack developers from the users object
let mernDevelopers = [];

for (const user in users) {
  if (
    users[user].skills.includes('MongoDB') &&
    users[user].skills.includes('Express') &&
    users[user].skills.includes('React') &&
    users[user].skills.includes('Node')
  ) {
    mernDevelopers.push(user);
  }
}

console.log(mernDevelopers); // ["Asab", "Brook", "Paul"]

// Set your name in the users object without modifying the original users object
const updatedUsers = { ...users, 'YourName': { email: 'your@email.com', skills: [], age: 25, isLoggedIn: false, points: 0 } };
console.log(updatedUsers);

// Get all keys or properties of users object
console.log(Object.keys(users));

// Get all the values of users object
console.log(Object.values(users));

// Use the countries object to print a country name, capital, populations, and languages.
// Assuming countries object is defined in the environment
for (const country in countries) {
  const { name, capital, population, languages } = countries[country];
  console.log(`Country: ${name}, Capital: ${capital}, Population: ${population}, Languages: ${languages.join(', ')}`);
}

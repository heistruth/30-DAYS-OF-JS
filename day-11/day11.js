//Destructuring assignment
const [e, pi, gravity, humanBodyTemp, waterBoilingTemp] = constants;
const [fin, est, sw, den, nor] = countries;
const { width, height, area, perimeter } = rectangle;


// Iterate through the users array and get all the keys of the object using destructuring
users.forEach(({ name, scores, skills, age }) => {
    console.log(Object.keys({ name, scores, skills, age }));
});

// Find the persons who have less than two skills
const lessThanTwoSkills = users.filter(({ skills }) => skills.length < 2);
console.log(lessThanTwoSkills);


// Destructure the countries object and print name, capital, population, and languages of all countries
const countriesObject = {
    fin: 'Finland',
    est: 'Estonia',
    sw: 'Sweden',
    den: 'Denmark',
    nor: 'Norway'
};

Object.entries(countriesObject).forEach(([key, value]) => {
    console.log(`Name: ${value}, Capital: ${key.toUpperCase()}, Population: Population of ${value}, Languages: ${value} languages`);
});

// Destructure the student array to extract name, skills, jsScore, and reactScore
const student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]];
const [name, skills, [, , jsScore, reactScore]] = student;
console.log(name, skills, jsScore, reactScore);

// Write a function called convertArrayToObject which can convert the array to a structured object
function convertArrayToObject(students) {
    return students.map(([name, skills, scores]) => ({
        name,
        skills,
        scores
    }));
}

const students = [
    ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
    ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
];

console.log(convertArrayToObject(students));

// Copy the student object to newStudent without mutating the original object and add new skills
const newStudent = {
    ...student,
    skills: {
        ...student.skills,
        frontEnd: [...student.skills.frontEnd, { skill: 'Bootstrap', level: 8 }],
        backEnd: [...student.skills.backEnd, { skill: 'Express', level: 9 }],
        dataBase: [...student.skills.dataBase, { skill: 'SQL', level: 8 }],
        dataScience: [...student.skills.dataScience, 'SQL']
    }
};

console.log(newStudent);

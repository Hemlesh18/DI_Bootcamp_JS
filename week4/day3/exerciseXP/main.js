// // 1
// // ------1------
// const fruits = ["apple", "orange"];
// const vegetables = ["carrot", "potato"];

// const result = ['bread', ...vegetables, 'chicken', ...fruits];
// console.log(result); //[ 'bread', 'carrot', 'potato', 'chicken', 'apple', 'orange' ]

// // ------2------
// const country = "USA";
// console.log([...country]);//['U','S','A']

// // ------Bonus------
// let newArray = [...[,,]];
// console.log(newArray);// [ undefined, undefined ]


//ex 2
const users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
             { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
             { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
             { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
             { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
             { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
             { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];
// // 1
const welcomeStudents = users.map(person => `Hello ${person.firstName}`);
console.log(welcomeStudents);
// // 2
const fullStackResidents = users.filter(person => person.role === 'Full Stack Resident');
console.log(fullStackResidents);
// // 3
const fullStackResidentsLastName = users.filter(person => person.role === 'Full Stack Resident').map(person => person.lastName);
console.log(fullStackResidentsLastName);

// ex3
const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];
const epicPhrase = epic.reduce((phrase, word) => phrase + ' ' + word);
console.log(epicPhrase);

// ex4
const student = [{name: 'Ray', course: 'Computer Science', isPassed: true},
                {name: 'Liam', course: 'Computer Science', isPassed: false},
                {name: 'Jenner', course: 'Information Technology', isPassed: true},
                {name: 'Marco', course: 'Robotics', isPassed: true},
                {name: 'Kimberly', course: 'Artificial Intelligence', isPassed: false},
                {name: 'Jamie', course: 'Big Data', isPassed: false}];

const passedStudents = student.filter(person => person.isPassed);
console.log(passedStudents);

passedStudents.forEach(person => console.log(`Good job ${person.name}, you passed the course in ${person.course}`));





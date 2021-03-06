const fruits = ['Apple', 'Mango', 'Orange'];

console.log(fruits);

const array = ['Allen', 387, '38968768', 'Mumbai', new Date()];

console.log(array);

const persons = [
    {
        id: 12,
        firstName: 'John',
        lastName: 'Marshal'
    },
    {
        id: 324,
        firstName: 'Allen',
        lastName: 'Green'
    },
    {
        id: 36,
        firstName: 'Martin',
        lastName: 'Grey'
    },
]

console.log(persons);

console.log(fruits[1]);
console.log(persons[1]);

// for, forEach, forin, forof

const message = 'Hello World';

// for
// Iterable - array, strings
console.log('for loop:');
for (let i = 0; i < persons.length; i++) {
    console.log(i, persons[i]);
}
for (let i = 0; i < message.length; i++) {
    console.log(i, message[i]);
}

// forof
// Iterable - array, strings
console.log('forof loop:');
for (const person of persons) {
    console.log(person);
}
for (const fruit of fruits) {
    console.log(fruit);
}
for (const m of message) {
    console.log(m);
}


// forin
console.log('forin loop:');
for (const key in fruits) {
    console.log(key, fruits[key]);
}
for (const key in message) {
    console.log(key, message[key]);
}

const person = {
    firstName: 'John',
    lastName: 'Marshal',
    age: 23,
    fullName: function () {
        console.log('Inside method:', this);
        return this.firstName + ' ' + this.lastName
    },
    hobbies: ['Cricket', 'Music', 'Dance']
}

for (const key in person) {
    if (key === 'age') {
        console.log(key, person[key]);
    }
}

// forEach
// only with arrays
console.log('forEach loop:');
// persons.forEach(function (person) {
//     console.log(person);
// })
persons.forEach(person => console.log(person));

const salaries = [24000, 36000, 38700, 40788];

// salaries.forEach(salary => console.log(salary * 12));
salaries.forEach(function (salary) {
    console.log(salary * 12);
});

const arr1 = [];

arr1[2] = 678;
arr1[5] = 3897;

for (let i = 0; i < arr1.length; i++) {
    console.log(i, arr1[i]);    
}
for (const a of arr1) {
    console.log(a);
}
for (const key in arr1) {
    console.log(key, arr1[key]);
}
arr1.forEach(item => console.log(item));
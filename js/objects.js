"use strict"

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

// reading object property
console.log(person.firstName);
console.log(person['lastName']);
console.log(person['hobbies']);

// updating object property
person.firstName = 'Allen';
person['lastName'] = 'Green';

console.log(person.firstName);
console.log(person['lastName']);

// adding new property

person.gender = 'Male';
person['job'] = 'Doctor';

console.log(person);

console.log(person.fullName());

console.log('Inside global scope:', this);

function greet(message) {
    console.log('Inside function:', this);
}

greet();

let count = 0;
const saveBtn = document.getElementById('save');

const onSaveBtnClick = function () {
    console.log('Inside event handler:', this);
    this.innerText = 'Save ' + (++count);
}

saveBtn.addEventListener('click', onSaveBtnClick);
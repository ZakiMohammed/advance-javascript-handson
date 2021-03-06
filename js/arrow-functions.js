function greet(message, name) {
    console.log(message + ' ' + name);
}

function add(num1, num2) {
    return num1 + num2;
}

greet('Hello World', 'Allen');
console.log(add(3087, 839));

// const employee = {
//     id: 39873,
//     name: 'Allen',
//     salary: 12000,
//     annualSalary: function () {
//         return this.salary * 12;
//     }
// }

// console.log(employee.annualSalary());

// const percentage = function (obtained, total) {
//     return (obtained / total) * 100;
// }

// console.log(percentage(146, 300));

let messageShown = true;
const toggle = document.getElementById('toggle');
const message = document.getElementById('message');

toggle.addEventListener('click', function () {
    if (messageShown) {
        message.style = 'display: none';
        messageShown = false;
    } else {
        message.style = 'display: inline';
        messageShown = true;
    }
})

/**
 * Functions declaration ways
 * 1. Using function keyword [greet, add]
 * 2. Using function keyword but as a variable [percentage, annualSalary]
 * 3. Anonymous function [toggle event listener]
 * 4. Arrow function
 *  - Small in syntax
 *  - Can have curly braces
 *  - Cannot use this keyword, because it points to global scope object (Window)
 */

// const percentage = (obtained, total) => {
//     return (obtained / total) * 100;
// }

const percentage = (obtained, total) => (obtained / total) * 100;
const minus = (num1, num2) => num1 - num2;
const print = value => console.log(value)

const factorial = (num) => {
    let fact = 1;
    for (let i = 1; i <= num; i++) {
        fact = fact * i;
    }
    return fact;
}

print('Hey');

console.log(percentage(146, 300));
console.log(minus(146, 300));
console.log(factorial(5));

const employee = {
    id: 39873,
    name: 'Allen',
    salary: 12000,
    annualSalary: () => {
        console.log(this.salary);
        return this.salary * 12;
    }
}

const annualSalary = (salary) => salary * 12;

console.log(employee.annualSalary());
console.log(annualSalary(12000));
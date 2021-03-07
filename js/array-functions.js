const employees = [
    {
        "code": "CT7207",
        "salary": 40000,
        "id": 1007,
        "job": "Manager",
        "department": "Operations",
        "name": "Bently Smith",
        "hobbies": ["Sports", "Reading", "Painting"]
    },
    {
        "code": "CT7210",
        "salary": 80000,
        "id": 1010,
        "job": "Director",
        "department": "Operations",
        "name": "Isla Morris",
        "hobbies": ["Sports", "Reading"]
    },
    {
        "code": "CT7202",
        "salary": 15000,
        "id": 1002,
        "job": "Salesman",
        "department": "Sales",
        "name": "Allen Green",
        "hobbies": ["Sports", "Painting"]
    },
    {
        "code": "CT7208",
        "salary": 60000,
        "id": 1008,
        "job": "Analyst",
        "department": "Research",
        "name": "Xavier Campbell",
        "hobbies": ["Reading", "Painting"]
    },
    {
        "code": "CT7209",
        "salary": 50000,
        "id": 1009,
        "job": "Analyst",
        "department": "Research",
        "name": "Ethan Kumar",
        "hobbies": ["Crafting", "Painting"]
    },
    {
        "code": "CT7201",
        "salary": 20000,
        "id": 1001,
        "job": "Clerk",
        "department": "Accounting",
        "name": "John Marshal",
        "hobbies": ["Singing", "Painting"]
    },
    {
        "code": "CT7205",
        "salary": 15000,
        "id": 1005,
        "job": "Salesman",
        "department": "Sales",
        "name": "Ethan Almaas",
        "hobbies": ["Singing", "Dancing"]
    },
    {
        "code": "CT7211",
        "salary": 15000,
        "id": 1011,
        "job": "Salesman",
        "department": "Sales",
        "name": "Natalie Robinson",
        "hobbies": ["Writing"]
    },
    {
        "code": "CT7212",
        "salary": 15000,
        "id": 1012,
        "job": "Salesman",
        "department": "Sales",
        "name": "Earl Rose",
        "hobbies": ["Singing", "Sports"]
    },
    {
        "code": "CT7206",
        "salary": 20000,
        "id": 1006,
        "job": "Clerk",
        "department": "Accounting",
        "name": "Ilija Seifert",
        "hobbies": ["Singing", "Cooking"]
    },
    {
        "code": "CT7204",
        "salary": 20000,
        "id": 1004,
        "job": "Clerk",
        "department": "Accounting",
        "name": "Annette Burke",
        "hobbies": ["Reading", "Teaching"]
    },
    {
        "code": "CT7203",
        "salary": 15000,
        "id": 1003,
        "job": "Salesman",
        "department": "Sales",
        "name": "Fernando Gordon",
        "hobbies": []
    },
    {
        "code": "CT7213",
        "salary": 15000,
        "id": 1013,
        "job": "Salesman",
        "department": "Sales",
        "name": "Catherine Foster",
        "hobbies": []
    }
];

console.log(employees.length);

// 1. Get employee with id 1003.
// -----------------------------------------
// let e = null;
// for (const employee of employees) {
//     if (employee.id === 1003) {
//         e = employee;
//     }
// }
// console.log(e);

// const employee = employees.find(function (employee) {
//     return employee.id === 44897
// })

/**
 * find
 * - find an element inside an array based on condition
 * - if found the returns the element otherwise returns undefined
 */

const employee = employees.find(i => i.id === 1003)

console.log(employee);

// 2. Get the index of an employee having id 1008.
// -----------------------------------------
// let e = -1;
// for (let i = 0; i < employees.length; i++) {
//     if (employees[i].id === 4846) {
//         e = i;
//     }
// }
// console.log(e);

/**
 * findIndex
 * - find an index of an element inside an array based on condition
 * - if found the returns the index otherwise returns -1
 */

const index = employees.findIndex(i => i.id === 1008);
console.log(index);

//
// -----------------------------------------
// findIndex - find an index of an element inside an array based on condition
// - if found the returns the index otherwise returns -1
// -----------------------------------------

// 3. Get all salesman employees

/**
 * filter
 * - find an element(s) inside an array based on condition
 * - if found the returns the element(s) array otherwise returns empty array
 */

const managers = employees.filter(i => i.job === 'Salesman');
console.log(managers);

// 4. Get employees having salaries greater than 40K.

const employee1 = employees.filter(i => i.salary > 40000);
console.log(employee1);

// 5. Get employees having salaries greater than 50K and from the research department.

const employee2 = employees.filter(i => i.salary > 10000 && i.department === 'Research');
console.log(employee2);

// 6. Get the name and salary of all employees.
// const employee3 = employees.map(i => {
//     return {
//         name: i.name,
//         salary: i.salary
//     }
// })

/**
 * map
 * - convert or re-structure elements of an array
 */

const employee3 = employees.map(i => ({ name: i.name, salary: i.salary }));
console.log(employee3);

// SELECT * FROM Employee
// SELECT Name, Salary FROM Employee -> Projection
// SELECT Name, Salary * 12 AnnualSalary FROM Employee -> Projection

// 7. Get only the name, job and annual salary of all employees.

const employee4 = employees.map(i => ({
    name: i.name,
    job: i.job,
    annualSalary: i.salary * 12
}));
console.log(employee4);

// 8. Get the first name and last name of all employees.

const employee5 = employees.map(i => {
    const name = i.name.split(' ');
    return {
        firstName: name[0],
        lastName: name[1]
    };
});
console.log(employee5);

/**
 * 9. Get 
 *      id, name and salary of employees -> map
 *      having salary greater than 10K but less than 20K -> filter
 *      ordered by id.
 */

const employee6 = employees
    .filter(i => i.salary > 10000 && i.salary < 20000)
    .map(i => ({
        id: i.id,
        name: i.name,
        salary: i.salary
    }))
    .sort((a, b) => a.id - b.id);

console.log(employee6);

// forEach, find, findIndex, filter, map, sort
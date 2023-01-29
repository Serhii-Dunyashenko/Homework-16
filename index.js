// 1. isEmpty check
const objectEmpty = {
    fristNames: 'Michael'
}
const objectFull = {
    firstNames: 'Bruce',
    lastNames: 'Willis',
};
function isEmpty (obj) {
    let keysCount = Object.keys(obj).length;
    if (keysCount > 1) {
        console.log(`This object is full of properties`)
    } else {
        console.log(`This object is empty`)
    }
};
isEmpty(objectFull);
isEmpty(objectEmpty);


// 2. Hire Employee

// Good employee

const employee1 = {}

Object.defineProperty(employee1,'firstName', {value: "Serj", configurable: false} );
Object.defineProperty(employee1,'lastName', {value: "Tankian", configurable: false} );
Object.defineProperty(employee1,'age', {value: 55, configurable: false} );
Object.defineProperty(employee1,'experience', {value: 5, configurable: false} );
Object.defineProperty(employee1,'nationality', {value: "Armenia", configurable: false} );


// Bad employee

const employee2 = {}

Object.defineProperty(employee2,'firstName', {value: "Nikolay", configurable: true} );
Object.defineProperty(employee2,'lastName', {value: "Baskov", configurable: true} );
Object.defineProperty(employee2,'age', {value: 46, configurable: true} );
Object.defineProperty(employee2,'experience', {value: 0, configurable: true} );
Object.defineProperty(employee2,'nationality', {value: "Moskal", configurable: true} );

// Lie to Me

function lieToMe(obj) {;
    Object.defineProperty(employee2,'experience', {value: "25"} );
    delete obj.age;
}

// Check function
function hireNewEmployee (obj) {

    // Lie
    lieToMe(obj);
   
    // Reasons
    let reasons = [];
    if (obj.age < 25) {
        reasons.push(` Your age is ${obj.age}, which is less than 25 years old.`)
    };
    if (obj.experience < 2) {
        reasons.push(` Your experience is ${obj.experience} years, which  is less than 2 years.`)
    };
    if (obj.nationality.toUpperCase() === "MOSKAL") {
        reasons.push(` Follow the russian battleship!`)
    };

    // Decision
    if (reasons.length === 0) {
        console.log(`You're Hired! Congrats!`);
    } else {
        console.log(`Not hired: sorry we cannot hire you. Here is why: ${reasons}`);
    }
};



hireNewEmployee (employee2);
hireNewEmployee (employee1);
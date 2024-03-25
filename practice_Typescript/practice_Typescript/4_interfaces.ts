// Interfaces allow us to create contracts other classes/ objects have to implement
// Interfaces ARE NOT compiled to JavaScript! It's just for checking/ validation done by TypeScript compiler
// An interface to enforce the shape of an object

// Example interface

interface User {
    username: string;
    password: string;
    confirmPassword?: string; // Optional property => Does not have to be implemented
}

let aUser:User;

// This value does not satisfy the interface => Compilation error
// user = { anything: 'anything', anynumber: 5};

// This value does satisfy the interface
aUser = {username: 'max', password: 'supersecret'};

// Interfaces can also contain functions (without the function body - as it only is a blueprint/ requirement)

interface CanDrive {
    accelerate(speed:number): void;
}

let car:CanDrive = {
    accelerate: function (speed:number) {
        // ...
    }
};


//another example

interface Person {
    name: string;
    age: number;

}

function birthYear(p: Person) {
    return 2021 - p.age;
}


//Yet another example

interface Employee {
    first: string;
    last: string;
}

const person1: Employee = {
    first: 'John',
    last: 'Smith'
}

const person2: Employee = {
    first: 'Mary',
    last: 'Jane'
}

function power(x: number, y: number) {
    return Math.pow(x, y);
}

power(10, 5);
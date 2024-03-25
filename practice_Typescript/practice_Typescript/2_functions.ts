//functions are created in TS using the function keyword. They are primary building blocks on any program

//Named function - function with a name which can be called using it's name.

//function can return a value and a return type can be specified
//function that returns the maximum of the two numbers
function power(x: number, y: number): number {
    return Math.pow(x, y);
}

power(2, 3); //will return 8 as the max value

//Anonymous function - a function without a name.
//- function which is defined as an expression and it's value is stored in a variable.
let greeting = function(message:String){
    console.log(message)
}

//calling a anonymous function using the variable name
greeting('hello') //prints hello
//An array example
const list: number[] = [3, 7, 5, 8, 5];

//push operations on arrays adds new elements to the end of the array
list.push(10);
list.push(20);
list.push(6);

//declaring a function - read about it here: https://www.typescriptlang.org/docs/handbook/functions.html
function loop(n: number[]): void {
    for (let i: number = 0; i < n.length; i++)
        console.log(n[i] + "\t");//console.log is a in-built function to print stuff to console window
}


console.log("Current state of the array")
loop(list)

//pop operation removes and returns the element at the end of the array
list.pop()

console.log("After pop operation")
loop(list)

//splice function extracts a section of array and returns a new array
let subList: number[] = list.splice(4, 3)

console.log("sublist after splicing")
loop(subList)

console.log("list after splicing")
loop(list)

//shift operation removes the first element of the array
list.shift()

console.log("After the shift operation")
loop(list)


//Arrow Functions - Fat arrow notations can be used for anonymous functions.
// Arrow functions syntax: (param1, param2, ....) => { expression/function body }
//Arrow functions are called as lambda expressions in C#

//A anonymous function
let log = function(message: string){
    console.log(message)
}
//calling the anomymous function
log('Hello')

//shorter way to define the same function using arrow function
let doLog = (message:string) => {
    console.log(message)
}
//calling the fat arrow function
doLog('Hola')
//can be further simplified

let anotherLog = (message:string) => console.log(message)

anotherLog('Bonjour')

//if there are no parameters then leave the parenthesis empty

let onemoreLog = () => console.log('Hello')

onemoreLog()
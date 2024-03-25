
// TypeScript - a strongly typed language that requires declaration of data types for variables
// The compiler (transpiler) will generate an error if wrong type of value is assigned to a variable

// Declaring a variable with a type
// Using the 'let' keyword to create a variable ('const' would define an immutable constant)

let myString1: string;

myString1 = 'Welcome to Typescript';

//assigning a number to a string variable will result in an Error
//myString1 = 5;

// TypeScript can also infer types

let myString2 = 'Welcome to Typescript'; // => Type 'string' was inferred from the assigned value

// This will still resolve in a compilation error when assigned a different data type
// myString2 = 5;

// TypeScript may only infer values when those values are assigned at the declaration
// The following declaration will without assigning a value will result in a variable of 'any' type.

let myString3;

myString3 = 'This is a string';

// As myString3 is of 'any' type. This means we can assign anytype of value to it.
// but note we're also ignoring TypeScripts strength: Typing
myString3 = 5;

// Other basic types

let aString: string;
let aNumber: number;
let aBoolean: boolean;
let anArray: Array<string>; // This is a generic type to hold only 'strings' values
let anything: any; // Any can be used if we don't know the actual type => Use it rarely!


//declaring constants

const city: string = "Fargo"
const stockPrice: number = 1000
const pi: number = 3.14;
const married: boolean = true;



//declaring an array, initializing and accessing the array elements

let fruits: string[];
fruits = ['apple', 'Mango', 'Strawberry'];

for (let i = 0; i < fruits.length; i++)
    console.log(fruits[i] + "\n");

//Another array example
const numList: number[] = [3, 7, 5, 8, 5];

//push operations on arrays adds new elements to the end of the array
numList.push(10);
numList.push(20);
numList.push(6);

for (let i = 0; i < numList.length; i++)
    console.log(numList[i] + '\n')


//Typescript allows you to defined your own types

type Vegetable = 'tomato' | 'broccoli' | 'onion';
type Fruit = 'apple' | 'mango' | 'strawberry';

type Ingredient = Vegetable | Fruit; //type Ingredient is any of the possible Vegetable or Fruit values.

const juice: Ingredient[] = ['tomato', 'mango'];
const sludge: Ingredient[] = ['broccoli', "strawberry"];

//Typescript also supports enum
//enums are used to represent a collection of constant objects
enum Color {Red = 0, Green = 1, Blue = 2}
let backgroundColor = Color.Blue;






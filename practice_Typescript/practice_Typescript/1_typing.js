// TypeScript - a strongly typed language that requires declaration of data types for variables
// The compiler (transpiler) will generate an error if wrong type of value is assigned to a variable
// Declaring a variable with a type
// Using the 'let' keyword to create a variable ('const' would define an immutable constant)
var myString1;
myString1 = 'Welcome to Typescript';
//assigning a number to a string variable will result in an Error
//myString1 = 5;
// TypeScript can also infer types
var myString2 = 'Welcome to Typescript'; // => Type 'string' was inferred from the assigned value
// This will still resolve in a compilation error when assigned a different data type
// myString2 = 5;
// TypeScript may only infer values when those values are assigned at the declaration
// The following declaration will without assigning a value will result in a variable of 'any' type.
var myString3;
myString3 = 'This is a string';
// As myString3 is of 'any' type. This means we can assign anytype of value to it.
// but note we're also ignoring TypeScripts strength: Typing
myString3 = 5;
// Other basic types
var aString;
var aNumber;
var aBoolean;
var anArray; // This is a generic type to hold only 'strings' values
var anything; // Any can be used if we don't know the actual type => Use it rarely!
//declaring constants
var city = "Fargo";
var stockPrice = 1000;
var pi = 3.14;
var married = true;
//declaring an array, initializing and accessing the array elements
var fruits;
fruits = ['apple', 'Mango', 'Strawberry'];
for (var i = 0; i < fruits.length; i++)
    console.log(fruits[i] + "\n");
//Another array example
var numList = [3, 7, 5, 8, 5];
//push operations on arrays adds new elements to the end of the array
numList.push(10);
numList.push(20);
numList.push(6);
for (var i = 0; i < numList.length; i++)
    console.log(numList[i] + '\n');
var juice = ['tomato', 'mango'];
var sludge = ['broccoli', "strawberry"];
//Typescript also supports enum
//enums are used to represent a collection of constant objects
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var backgroundColor = Color.Blue;

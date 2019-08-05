// * Types

//* Booleans

//Boolean can represent: true/false, yes/no, on/off

let i = true;

let j = false;

true =/ 'true'

let on = true;
let off = false;

console.log(on, off);

// * Null
// * Null = empty value; -- note 0, not undefined

let empty = null;
console.log(empty);

// * Undefined 
// Undefined = no value assigned (not even an empty container)


let undef = undefined;
console.log(undef);

let x;
console.log(x);

// * Numbers

let degrees = 90
console.log(degrees);

let precise = 999999999999999;
console.log(precise);

let rounded = 9999999999999999;
console.log(rounded);


let notQuite = 0.2 + 0.1;
console.log(notQuite);

let numbersAreHard = (0.2 * 10 + 0.1 * 10) / 10;
console.log(numbersAreHard);

let a = Number('123');


// * Strings
let stringOne = "double quotes";
let stringTwo = 'single quotes';
console.log(stringOne, stringTwo);


let first = 1050 + 100
let second = '1050' +'100';
console.log(first);
console.log(second);

console.log(typeof first);
console.log(typeof second);

// * Objects

let car = {
    color: 'red',
    tires: 4,
    extras: 'A/C and Radio',
    cool: true
};

console.log(car);
console.log(typeof car);

// * Array

let list = [ 'item1', 'item2', 'item3',];
     (1)  (2)  (3)
//1 - Name of the array
//2 - Array is inside of these square brackets
//3 - each item, regardless of datatype, is separated by commas


let burritos = ['large', 4, true];
console.log(burritos);
console.log(typeof burritos);


//* Addition vs. Concatenation

/*
* When JS sees combining two or more numbers, it adds the values together using the built-in math functionality;
* When it sees adding together one or more strings, it changes and the plus sign becomes an assignment operator-
-it smashes the values together without trying to synthesize the values
*/

let third = 1050 + '100';
console.log(third);
console.log(typeof third);



let firstname = 'Danielle';
let lastname = 'Rodriguez';
let houseNumber = '28';
let street = 'E 16th street';
let aptNumber = 'Apt 202';
let city = 'Indianapolis';
let state = 'Indiana';
let zipcode = '46202';

console.log('Hi, my name is ' + firstname, lastname, houseNumber, street, aptNumber, city, state, zipcode);


/*
Strings - Properties
********************
Properties are qualities associated with a datatype. 
Strings have properties, or the qualities associated with that string.
The length of a string is a property.  
 */ 

 let myName = 'Danielle';
 console.log(myName.length);


 /*Methods
************
Methods are like tools that can help us manipulate our data. 
.Property and .Methods() *no parenthesis for properties*
*/

let myNameIs = 'Danielle';
console.log(myNameIs.toUpperCase());

let home = 'My home is Indianapolis';
console.log(home.includes ('Indianapolis'));


let sent = 'This sentence will be split into individual parts';

console.log(sent.split (' ');

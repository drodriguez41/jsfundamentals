let weather = 75;

if ( weather < 70 ) {
    console.log('Wear a jacket!');
} else {
    console.log('No jacket needed')
}




// Challenge 1


let name = 'Danielle';

if (name = 'Danielle') {
    console.log('Danielle');
} else {
    console.log('Hello, what is your name?')
}

let name = 'Danielle';

if (name = 'Danielle') {
    console.log('Hello, my name is Danielle')
} else {
    console.log('Hello, is your name Danielle?')
}



/*
? Challenge: 
**********
? Use this string - let name = 'aUTuMN';
? Bronze: 
Write an if else statement that looks at the first letter of a string. If it is uppercase, console.log the string; 
If it is not console.log 'hey its not written correctly' 
? Silver:
If the first letter of a string is uppercase, only console.log that letter
if it is not, console.log the rest of the string Without the first letter, and change them to lowercase 
? Gold: 
If the first letter of a string is uppercase, console.log that that first letter of a string  plus the rest of the string to lowercase
If it is not, console.log the first letter of the string to uppercase plus the rest of the string to lowercase
*/
// Challenge 2
//Step 1

let name = 'aUTuMN'

if (name.charAt(0) === name.charAt(0).toUpperCase() {
    console.log(name);
} else { 
    console.log('hey, this is not written correctly')

}


// Step 2

let name = 'aUTuMN'

if (name.charAt(0) === name.charAt(0).toUpperCase() {
    console.log(name.slice(0));
} else { 
    console.log(name.slice(1).toLowerCase())

// Step 3

let name = 'aUTuMN'


if (name.charAt(0) === name.charAt(0).toUpperCase() {
    firstLetter = name.charAt(0) + name.slice(1).toLowerCase()
    console.log(name.slice(0));
} else {
    otherLetter = name.charAt(0).toUpperCase() + name.slice(1).toUpperCase()
    console.log(otherLetters);


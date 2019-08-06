//* TERNARY */

let number = 6;

if (number > 0) {
    console.log(true);
} else {
    console.log(false);
}

(number > 0) ? console.log(true) : console.log(false);




// SWITCH STATEMENT TURNED INTO TERNARY */
let age = 35

switch (true) {
case (age >= 25):
console.log('Yay, you can rent a car!')
break;
case (age >= 21):
console.log('Yay, you can drink!')
break;
case (age >= 18):
console.log('Yay, you can vote!')
break;
case (age <= 17):
console.log('Sorry, you are too young to do anything.')
break;
default: 
console.log('Not a number.')

}
//* TERNARY */

let age = 30;
(age >= 25) ? console.log('Yay, you can rent a car!') : (age >=21) ? console.log('yay you can drink') : (age >= 18) ? console.log('yay you can vote') : console.log('sorry you are too young to do anything fun');
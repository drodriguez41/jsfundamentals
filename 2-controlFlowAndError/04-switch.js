/* **************
? SWITCH
**************** */



let friend = 'Bob';
switch (friend) {
  case 'Autumn':
    console.log("Hey Autumn, when are we going rock wall climbing?");
    break;
  case 'Dave':
    console.log("Hey Dave, how is Cooper?");
    break;
  case 'Alecx':
    console.log("Hey Alecx, when are we playing DnD?");
    break;
  default:
    console.log(`I'm sorry, ${friend}, but do I know you?`);
    console.log('I\'m sorry,', friend, ', but do I know you?');
}




let dessert = 'pie';

switch (dessert) {
    case 'Cake':
    console.log("Cake is great!") 
      break;
    case 'IceCream':
    console.log("I scream for IceCream!")
      break;
    case 'pie' || 'Pie':
        console.log("Pie, pie, me oh my!");
      break;
    default:
        console.log('Not on the menu.')
  }
    


  let age = 35


if (age <= 17) {
console.log('Sorry, you are too young to do anything.')
} else if (age >= 25) {
console.log('Yay, you can rent a car!')
} else if (age >= 21) {
console.log('Yay, you can drink!')
} else if (age >= 18) {
console.log('Yay, you can vote!');
} 


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

//* NOTE: Start with the strictest parameters first. 
// * "SWITCH" = What am I checking for? True/False.
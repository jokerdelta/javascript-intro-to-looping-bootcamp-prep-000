var array = [];
var n = Math.floor((Math.random() * 10) + 1); //generate random number between 1 and 10


function forLoop(array){

for (let i = 0; i < 25; i++){

if (i === 1){
  array.push("I am 1 strange loop.");
} else {
array.push("I am ${i} strange loops.");
} //end of if-else statement

} //end of for loop

} //end of forLoop function

function whileLoop(n){

while (n > 0){
  console.log('The number is ${n}.');
  n--;
  } //end of while loop

  console.log('done');
} //end of function whileLoop

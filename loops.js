var array = [];
var n = Math.floor(Math.random() * 10); //generate random number between 1 and 10

function forLoop(array){

for (let i = 0; i < 25; i++){

if (i === 1){
    array.push('I am ${i} strange loop.');

} else {
  array.push('I am ${i} strange loops.');
} //end of if-else statement

} //end of for loop
return array;

} //end of forLoop function

function whileLoop(n){

while (n > 0){
  console.log(n);
  n--;
  }// end of while loop
return "done";
} //end of function

function maybeTrue() {
  return Math.random() >= 0.5
}

function doWhileLoop(array){

do{
    array = array.slice(1);

  } while (array.length > 0 && maybeTrue());

  return array;
}

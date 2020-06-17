//default value com lazy evaluation
function randomNumber() {
  return Math.random() * 10;
}

function multiply(a, b = randomNumber()){
    return a * b;
}

/* function multiply(a, b = 1){
    return a * b;
} */
console.log(multiply(5));
console.log(multiply(5, 0));
console.log(multiply(5, 3));

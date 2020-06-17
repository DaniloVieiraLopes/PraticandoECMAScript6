var arr = ["Apple", "Banana", "Orange", ["Tomato"]];
var apple = arr[0];
var banana = arr[1];
var orange = arr[2];
var tomato = arr[3][0];

var obj = {
  name: "Celso",
  props: {
    age: 26,
  },
};

//Destructuring Assigment com array
var [apple2, banana2, orange2, [tomato2]] = [
  "Apple",
  "Banana",
  "Orange",
  ["Tomato"],
];
console.log(banana, banana2);
console.log(tomato, tomato2);

//Destructuring Assigment com object
var { name } = obj;
var {
  props: { age },
} = obj;
console.log(name);
console.log(age);

//Destructuring Assigment com functions
function sum([a, b] = []) {
  return a + b;
}
console.log(sum([5, 9]));

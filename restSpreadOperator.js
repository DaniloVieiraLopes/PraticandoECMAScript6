//rest operator ...

function sum(...valores) {
  return valores.reduce((somatorio, valor) => somatorio + valor, 0);
}

console.log(sum(5, 5, 3, 4, 2));

//rest operator pegando valores parciais

const soma = (a, b, ...valores) => {
  console.log(a, b, valores);
};
soma(5, 5, 3, 4, 2);

//spread operator ... permite passar parametros para um rest operator
const multiply = (...valores) =>
  valores.reduce((acumulador, valor) => acumulador * valor, 1);

const sum2 = (...valores) => {
  return multiply(...valores);
};
console.log(sum2(2,3,4,5,6));

//spread operator em string e array
const str = 'Cast Group';
const arr = [1,2,3,4];
function logar(...args){
    console.log(args);
}
function logarArray(a,b,c){
    console.log(a,b,c);
}

logar(...str);
logarArray(...arr);

const arrayConcatenado = [...arr,5,6,7];
console.log(arrayConcatenado);

//spread operator para criar objetos literais
const obj = {
    test: 123   
};
const obj2 = {
    ...obj
}
console.log(obj2);
//Symbols - nunca é igual ao outro; é um identificador único.

const uniqueId = Symbol("Hello");
const uniqueId2 = Symbol("Hello");
console.log(uniqueId === uniqueId2);

// usando symbol como iterator de array

const array = [1, 2, 3, 4];
const iterator = array[Symbol.iterator]();
console.log(iterator.next());

//Generators - usado para quebar e executar a medida de cada next, cada parte da função.
function* hello() {
    console.log('Hello');
    yield;

    console.log('From');
    yield;
    
    console.log('Function');
}

const it = hello();
console.log(it.next());
console.log(it.next());
console.log(it.next());


function* naturalNumbers() {
    let number = 0;
    while (true) {
        yield number;
        number++;
    }
}

const iter = naturalNumbers();
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
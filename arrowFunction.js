var soma = function (a, b) {
  return a + b;
};
console.log(soma(4, 89));

function Car() {
  this.foo = "bar";
}
console.log(new Car());

// Arrow functions: são funções anônimas.

var soma = (a, b) => a + b;
var createObj = () => ({ test: 123 });

console.log(soma(5, 10));
console.log(createObj());

// java script possui contexto de execução - arrow fantasy preserva o mesmo contexto do obj nesse caso
var obj = {
  showContext: function showContext() {
    setTimeout(() => {
      this.log('after 1000ms');
    }, 1000);
  },
  log: function log(value) {
    console.log(value);
  },
};

var prop1 = "Digital Innovation One";
function method1() {
  console.log("method called");
}
/* var obj = {
    prop1: prop1
    method1: method1
    sum: function sum(a,b){
        return a + b;
    }
} */

//se a propriedade, ou função possuirem o mesmo nome. Temos opção de utilizar formas contraidas
//para facilitar a legibilidade
var obj = {
  prop1,
  method1,
  sum(a, b) {
    return a + b;
  }
};
console.log(obj.prop1);
obj.method1();
console.log(obj.sum(5, 8));

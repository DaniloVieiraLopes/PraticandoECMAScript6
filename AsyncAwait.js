const fetch = require("node-fetch");

//ES7 - Async / Await. Criar promisses e lidar com promisses de uma forma mais facil e enxuta.

/*
poderia ser uma funcção normal, ao inves de função anomia com arrow function.
const simpleFunction = async function() => {
    return 12345;
}
 */

//async -> transformou a função em uma promisse resolvida.
//await -> aguardar que uma promisse seja resolvida. Usado apenas dentro do async.

const asyncTimer = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(12345);
    }, 1000);
  });

// uma exemplo de como podemos de forma assincrona. Executar passos sincronos.
/* const simpleFunction = async () => {
  const data = await asyncTimer();
  console.log(data);
  const dataJson = await fetch(
    "http://dummy.restapiexample.com/api/v1/employees"
  ).then((resposta) => resposta.json());
  return dataJson;
};
simpleFunction().then((data) => console.log(data));

 */

//outra variação. processamento assincrono, com await paralelo
var url = 'http://dummy.restapiexample.com/api/v1/employees';
const simpleFunction = async () => {
  const data = await Promise.all([asyncTimer(),fetch(url).then(resposta => resposta.json())]);
  return data;
};


simpleFunction().then((data) => console.log(data));

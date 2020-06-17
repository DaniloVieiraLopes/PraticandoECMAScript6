const fetch = require("node-fetch");

//fetch só identifica erro de rede
// por default o método é sempre get.
// podemos usar outros metodos como put ou passar o formato de arquivo retornado ou enviado.
fetch("http://dummy.restapiexample.com/api/v1/employees")
  .then((resposta) => resposta.json().then((data) => console.log(data)))
  .catch((error) => console.log("site errado", error));
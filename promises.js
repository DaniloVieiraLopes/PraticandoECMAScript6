//Promises
//possuem 3 status: Pending, Fulfilied, rejected

const doSomethingPromisse = () =>
  new Promise((resolve, reject) => {
    setTimeout(function () {
      //did something
      resolve("First data!");
    }, 1500);
  });

const doOtherThingPromisse = () =>
  new Promise((resolve, reject) => {
    //throw new Error('Something went wrong');
    setTimeout(function () {
      //did something
      resolve("Second data!");
    }, 1000);
  });

//pending
//console.log(doSomethingPromisse());

//fulfilled - quando resolvida
//doSomethingPromisse().then((data) => console.log(data));

//reject
/* doOtherThingPromisse()
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
 */
//promisses podem ser encadeadas
doSomethingPromisse();
/*   .then((data) => {
    console.log(data);
    return doOtherThingPromisse();
  })
  .then((data) => console.log(data))
  .catch((error) =>
    console.log("Caso algum erro ocorra em qualquer das promisses", error)
  ); */

//garantindo que ao executar 2 promisses de forma paralelas. Ainda assim,
//o resultado só será exibido após as 2 promisses serem cumpridas.
Promise.all([doSomethingPromisse(), doOtherThingPromisse()]).then((data) => {
  console.log(data[0]);
  console.log(data[1]);
});

//resolver a promessa de acordo com a promessa alinhada que executou mais rapidamente.
Promise.race([doSomethingPromisse(), doOtherThingPromisse()]).then((data) => console.log(data));
  
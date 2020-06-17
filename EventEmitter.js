//EventEmitter -> uma forma diferente de lidar com programação assincrona dentro do node
//deixando o código mais organizado. É algo exclusivo no node.

/* const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('User logged', data => {
  console.log(data);
});

emitter.emit('User logged', {user: 'Danilo Vieira'}); */

//posso extender essa classe

const EventEmitter = require('events');

class Users extends EventEmitter{
  userLogged(data){
    this.emit('User logged', data);
  }
}

const users = new Users();

users.on('User logged', data => {
  console.log(data);
});

//caso deseje consumir apenas uma vez
/* users.once('User logged', data => {
  console.log(data);
});
 */
users.userLogged({user: 'Danilo Vieira'});
users.userLogged({user: 'Luciano Cleber'});
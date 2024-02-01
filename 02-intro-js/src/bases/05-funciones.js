/** manera antigua de definir funciones, propenso a
 * modificaciones por sobreescritura */

/*function sayHi(name) {
    return `Hi, ${name}`
}*/

/** javascript moderno, recomendable usar constantes */
const sayHi = function (name) {
    return `Hi, ${name}`
}

/** funcion flecha */
const sayHi2 = (name) => {
    return `Hi, ${name}`
}

/** funcion flecha minimizada */
const sayHi3 = (name) => `Hi, ${name}`;

console.log(sayHi);
console.log(sayHi2('Vegeta'));
console.log(sayHi3('Goku'));

/** se usa cuando se quiere hacer una arrow function minizada,
  * pero se quiere retornar una objeto en lugar de un valor
  * primitivo */
const getUser = () => ({
    uid: 'ABC123',
    username: 'El_papi1502'
});

console.log(getUser());

/** convertir a arrow function*/
/*function getActiveUser(name) {
    return {
        uid: 'ABC123',
        username: name
    };
}*/

const getActiveUser = (name) => ({
    uid: 'ABC123',
    username: name
});

const activeUSer = getActiveUser('Alejandro');
console.log(activeUSer);

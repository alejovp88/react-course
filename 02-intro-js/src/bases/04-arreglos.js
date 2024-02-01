const array = [1,2,3,4];

//crea un arreglo haciendo una copia de array y luego agrega el siguiente valor
let array2 = [...array, 5];

const array3 = array2.map((value) => {
    return value*2;
});

console.log(array);
console.log(array2);
console.log(array3);
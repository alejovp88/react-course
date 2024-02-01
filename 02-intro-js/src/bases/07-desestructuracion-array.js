const characters = ['goku', 'vegeta', 'trunks'];

console.log(characters[0]);
console.log(characters[1]);
console.log(characters[2]);

console.log('----------------------');
const [p1] = characters;
console.log(p1);

const [,p2] = characters;
console.log(p2)

const [, , p3] = characters;
console.log(p3)

const returnArray = () => {
    return ['ABC', 123];
}

const [letters, numbers] = returnArray();

console.log(letters, numbers);

const getMessage = (value) => {
    return [value, () => {console.log('Hola Mundo')}];
}

console.log('----------------------');
const [name, setName] = getMessage('Goku');

console.log(name);
setName();
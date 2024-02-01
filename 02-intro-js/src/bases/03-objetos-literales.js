const person = {
    name: 'Tony',
    lastName: 'Stark',
    age: 45,
    address: {
        city: '',
        zip: 55321321,
        lat: 14.3232,
        lng: 34.9233321
    }
};

const person2 = {...person}; //clona el objeto sin clonar el espacio de memoria
person2.name = 'Peter';

console.log(person);
console.log(person2);
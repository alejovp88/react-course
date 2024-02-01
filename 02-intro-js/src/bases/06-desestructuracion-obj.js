console.log();

const person = {
    name: 'Tony',
    lastName: 'Stark',
    age: 45,
    password: 'IronMan'
};

console.log(person.name, person.age, person.password);

/** extraigo los valores requeridos del objeto a usar*/
const {name, age, password} = person;

console.log(name, age, password);

const returnPerson = (user) => {
    const {name, age, password} = user;

    console.log(name, age, password);
};

returnPerson(person);

/** puedo hacer desestructuracion del objeto que llega a la funcion,
 * se pueden asginar valores por defecto en caso de no existir en
 * el objeto */
const returnPerson2 = ({name, age, password, rango = 'capitan'}) => {

    console.log(name, age, password, rango);
};

returnPerson(person);
returnPerson2(person);

const returnPerson3 = ({age, password}) => {

    return {
        codeName: password,
        years: age,
        latLng: {
            lat: 14.1233,
            lng: -12.32132
        }
    }
};

const avenger = returnPerson3(person);

console.log(avenger);

const {codeName, years, latLng: {lat, lng} } = returnPerson3(person);

console.log(codeName, years);
console.log(lat, lng);
const name = 'Alejandro',
      lastName = 'Vargas',
      //fullName = name + ' ' + lastName,
      fullName = ` ${name} ${lastName} `;

console.log(fullName);

function getGreetings(nombre) {
    return `Hola ${nombre}`;
}

console.log(`Este es un texto ${getGreetings(fullName)}`)
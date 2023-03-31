// const moment = require('moment');

// const fechaActual = moment();
// const fechaNacimiento = moment('1998-11-12');

// if( fechaNacimiento.isValid() ){
//     console.log(fechaActual.diff(fechaNacimiento, 'years'));
// }

const { faker } = require('@faker-js/faker');

const nombre = faker.datatype.uuid();
console.log(nombre); // Imprime un nombre aleatorio, como "Lucas Hernández"
const person = {
    name: 'Juan',
    age: 30,
    country: 'MX',
    city: "CDMX",
}

const {name, age, ...address} = person; // lo desestructuramos y guardamos el resto en address GENIAL

console.log(name, age, address);

const updatePerson = { // creamos un nuevo objeto con el resto de las propiedades
    ...person,
    age: 31,
}

console.log(person);
console.log(updatePerson);
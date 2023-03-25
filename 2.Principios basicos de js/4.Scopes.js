// este es un ejemplo de scopes en js

// se crea una variable global
var nombre = 'Wolverine';

if (true) {
    // se crea una variable local
    var nombre = 'Magneto';
}

console.log(nombre);
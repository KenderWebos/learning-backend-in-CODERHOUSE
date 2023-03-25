const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const userNumber = parseInt( 2 );

const userNumberQuared = userNumber**2;

if(numbers.includes(userNumberQuared)){
    console.log(`El cuadrado de ${userNumber} es ${userNumberQuared}`);
}
else{
    console.log(`El cuadrado de ${userNumber} no está en el array`);
}

// includes sirve para saber si un elemento esta en el array que le pasamos por parametro
const suma = (a, b) => new Promise((resolve, reject) => (a===0) || (b===0) ? reject('No se sumara si es 0') : resolve(a + b));

const resta = (a, b) => new Promise((resolve, reject) => (a===0) || (b===0) ? reject('No se resta si es 0') : resolve(a - b));

const multiplicacion = (a, b) => new Promise((resolve, reject) => (a===0) || (b===0) ? reject('No se multiplica si es 0') : resolve(a * b));

async function calculadora(a, b) {
    try {
        let suma = await suma(a, b);
        let resta = await resta(a, b);
        let multiplicacion = await multiplicacion(a, b);
        return { suma, resta, multiplicacion };
    } catch (error) {
        console.error(error);
    }
}
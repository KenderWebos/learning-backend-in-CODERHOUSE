const fs = require("fs");

//CRUD

// Crear un archivo
fs.writeFile("archivo.txt", "Hola mundo", (error) => {
    if (error) {
        console.error(error);
    } else {
        console.log("Archivo creado");
    }
});

// Leer un archivo
const mainText = fs.writeFileSync("archivo.txt", "Hola mundo");

// Actualizar un archivo
fs.appendFile("archivo.txt", "\nAgregando cosas al final", (error) => {
    if (error) {
        console.error(error);
    } else {
        console.log("Archivo actualizado");
    }
});

// Eliminar un archivo

// fs.unlink("archivo.txt", (error) => {
//     if (error) {
//         console.error(error);
//     } else {
//         console.log("Archivo eliminado");
//     }
// });

// Verificar si un archivo existe

// fs.access("archivo.txt", (error) => {
//     if (error) {
//         console.error(error);
//     } else {
//         console.log("El archivo existe");
//     }
// });


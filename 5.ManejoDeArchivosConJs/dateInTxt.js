const fs = require("fs");

fs.writeFile("fecha.txt", new Date().toLocaleString(), (error) => {
    if (error) {
        console.error(error);
    } else {
        console.log("Archivo creado");
    }
});

//leer un archivo
fs.readFile("fecha.txt", "utf-8", (err, result)=>{
    if(err){
        console.error(err);
    }
    else{
        console.log(result);
    }
});

// // Actualizar un archivo
// fs.appendFile("archivo.txt", "\nAgregando cosas al final", (error) => {
//     if (error) {
//         console.error(error);
//     } else {
//         console.log("Archivo actualizado");
//     }
// });

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


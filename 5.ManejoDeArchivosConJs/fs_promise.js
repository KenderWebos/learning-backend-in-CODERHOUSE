const fs = require('fs').promises;

const operacionesAsincronas = async() => {
    await fs.promises.writeFile("a.txt", "Hola mundo");
    let resultado = await fs.promises.readFile("a.txt", "utf-8");
    console.log(resultado);
}

operacionesAsincronas();
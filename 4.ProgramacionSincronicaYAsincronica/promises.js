const promesa = new Promise((resolve, reject) => { // se declara la promesa que es un objeto especial

    const numeroAleatorio = Math.floor(Math.random() * 10);
  
    if (numeroAleatorio % 2 === 0) {
  
      resolve(numeroAleatorio);
  
    } else {
  
      reject(new Error('El número es impar'));
  
    }
  
  });
  
   
  
  promesa.then((numero) => { // se ejecuta cuando la promesa se cumple
  
    console.log(`El número ${numero} es par`);
  
  }).catch((error) => { // sino se cumple la promesa se ejecuta el catch
  
    console.error(error.message);
  
  });
const um = require('./UserManager');

const manager = new um.UserManager();

manager.crearUsuario({nombre: 'Juan', apellido: 'Perez', edad: 25});
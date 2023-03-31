const fs = inlcude('fs');

class UserManager
{
    async crearUsuario(usuario){
        const content = await fs.promises.readFile('data.json', 'utf-8');

        const usuario = JSON.parse(content);

        usuario.push(usuario);

        await fs.promises.writeFile('data.json', JSON.stringify(usuario));
    }

    async consultarUsuario(usuario){
        const content = await fs.promises.readFile('data.json', 'utf-8');

        const usuario = JSON.parse(content);

        return usuario;
    }

}
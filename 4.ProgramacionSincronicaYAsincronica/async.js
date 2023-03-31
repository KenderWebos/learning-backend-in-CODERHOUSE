async function buscar(value){
    try{
        let res = await fetch(`https://api.github.com/users/${value}`);
        let json = await res.json();
        return json;
    }
    catch(err){
        return err;
    }
}

async function mostrarInformacion(){
    try{
        let persona = await buscar("KenderWebos");
        let div = document.getElementById('container');

        //por cada uno de los elementos del objeto persona se agregan a el div
        for(let key in persona){
            let p = document.createElement('p');
            p.innerHTML = `${key}: ${persona[key]}`;
            div.appendChild(p);
        }

        div.innerHTML = JSON.stringify(persona);
    }
    catch(err){
        console.error(err);
    }
}

mostrarInformacion();
async function buscar(value){
    try{
        let res = await fetch(`https://api.github.com/users/${value}`);
        let json = await res.json();
        console.log(json);
    }
    catch(err){
        console.error(err);
    }
}

buscar('josepablo');
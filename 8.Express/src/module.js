function sayHello(){
    console.log('Hello');
}

function sayBye(){
    console.log('bye');
}

// luego exportamos todo para poder usarlo en otro archivo

module.exports = {
    sayHello,
    sayBye
}
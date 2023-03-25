class Person{
    #fullName = null; // variable privada

    constructor(fullNameValue){
        this.#fullName ??= `${fullNameValue}`; // si es null o undefined, asigna el valor SOLAMENTE
    }

    getFullName(){
        return this.#fullName ?? "GenericName";
    }
}

const person1 = new Person("Juan Perez");
const person2 = new Person(null);

console.log(person1.getFullName());
console.log(person2.getFullName());


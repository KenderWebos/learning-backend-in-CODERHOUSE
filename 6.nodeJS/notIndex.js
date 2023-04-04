const fs = require('fs');
const crypto = require('crypto');

class UserManager{
    constructor(){
        this.users = [];
    }

    addUser(user){
        this.users.push(user);
    }

    validateUser(user){
        const userFound = this.users.find(user => user.user === userFound);
        return userFound;
    }
}

const userManager = new UserManager();

userManager.addUser({user: "KenderWebos", password: "12321"});

const hash = crypto.createHash('sha256');
const newPass = hash.update("12321").digest('hex');

console.log(newPass);
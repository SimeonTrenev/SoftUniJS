function nameAndNumber(input){

    let firstName = input.shift();
    let lastName = input.shift();
    let age = input.shift();
    let town = input.shift();

    console.log(`You are ${firstName} ${lastName}, a ${age}-years old person from ${town}. `);


}
nameAndNumber(["Maria", "Ivanova", 20, "Sofia",]);
function solve(input){

    let typeOfGas = input.shift();
    let litres = Number(input.shift());
    typeOfGas.toLowerCase();
    

    if (typeOfGas === 'Diesel' || typeOfGas === 'Gasoline' || typeOfGas === 'Gas' ) {
        if(litres >= 25){
            console.log(`You have enough ${typeOfGas.toLowerCase()}.`)
        }else if(litres < 25){
            console.log(`Fill your tank with ${typeOfGas.toLowerCase()}!`)
        }
    }else{
        console.log('Invalid fuel!')
    }




}
solve(['Diesel', '10']);
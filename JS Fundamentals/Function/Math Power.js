function mathPower(number, power){

    let powered = 1;
    for(let i = 0; i < power;i++){
        powered *= number
    }
    return powered;

}
console.log(mathPower(3, 4))
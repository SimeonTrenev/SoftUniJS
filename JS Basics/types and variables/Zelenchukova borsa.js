function solve(input){

    let pricePerKiloVegetable = Number(input.shift());
    let pricePerKiloFruit = Number(input.shift());
    let kilosVegetable = Number(input.shift());
    let kilosFruit = Number(input.shift());

    let fundsForAllInBG = (pricePerKiloVegetable * kilosVegetable) + (pricePerKiloFruit * kilosFruit);
    let levKumEuro = 1 / 1.94;
    let fundsInEuro = fundsForAllInBG * levKumEuro;
    console.log(fundsInEuro.toFixed(2));



}

solve(["0.194", "19.4", "10", "10"]);
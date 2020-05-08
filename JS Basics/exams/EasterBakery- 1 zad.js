function solve(input){

    let priceForFlourPerKilogram = +input.shift();
    let kilogramsFlour = +input.shift();
    let kilosSugar = +input.shift();
    let numbersEggsByKori = +input.shift();
    let numberMaya = +input.shift();

    let priceForSugar = priceForFlourPerKilogram * 0.75;
    let priceForEggsByKori = priceForFlourPerKilogram * 1.10;
    let priceForMaya = priceForSugar * 0.2

    let sumAll = (priceForFlourPerKilogram * kilogramsFlour) + (kilosSugar * priceForSugar) + (numbersEggsByKori * priceForEggsByKori) +
    (numberMaya * priceForMaya);
    console.log(sumAll.toFixed(2))

}
solve(['50', '10', '3.5', '6', '1' ])
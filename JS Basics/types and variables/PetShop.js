function solve(input){

    let numberOfDogs = Number(input.shift());
    let numberOfRestAnimals = Number(input.shift());

    let dogsFood = 2.50;
    let restAnimalsFood = 4;

    let result = (dogsFood * numberOfDogs) + (restAnimalsFood * numberOfRestAnimals);

    console.log(`${result.toFixed(2)} lv.`)

}
solve(["5",
"4",

]);
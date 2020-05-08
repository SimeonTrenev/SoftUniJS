function solve(input){

    let priceForToy = 5;
    let priceForShirt = 15;
    let numUnder16 = 0;
    let numOver16 = 0;
    let price = 0;
    let comand = input.shift();
    while(comand !== 'Christmas'){
        comand = Number(comand);
        if(comand <= 16){
            numUnder16++
        }else if(comand > 16){
            numOver16++;
        }
        comand = input.shift();
    }
    let sumForToys = numUnder16 * priceForToy
    let sumForShirt = numOver16 * priceForShirt
    console.log(`Number of adults: ${numOver16}`)
    console.log(`Number of kids: ${numUnder16}`)
    console.log(`Money for toys: ${sumForToys}`)
    console.log(`Money for sweaters: ${sumForShirt}`)

}
solve(['16', '20', '46', '12', '8', '20', '49', 'Christmas']);
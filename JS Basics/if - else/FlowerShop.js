function solve(input){

    let magnolii = Number(input.shift());
    let zumbiuli = Number(input.shift());
    let rozi = Number(input.shift());
    let kaktusi = Number(input.shift());
    let priceForPresent = Number(input.shift());

    let priceMagnolii = 3.25;
    let priceZumbiuli = 4;
    let priceRozi = 3.50;
    let priceKaktusi = 8;

    let allMagnolii = magnolii * priceMagnolii;
    let allZumbiuli = zumbiuli * priceZumbiuli;
    let allRozi = rozi * priceRozi;
    let allKaktusi = kaktusi * priceKaktusi;

    let allFlowers = allMagnolii + allZumbiuli + allRozi + allKaktusi;
    let allAfterTax = allFlowers * 0.95;
    let isThatOK = Math.abs(allAfterTax - priceForPresent);

    if(allAfterTax >= priceForPresent){
        console.log(`She is left with ${Math.floor(isThatOK)} leva.`);
    } else if(priceForPresent > allAfterTax){
        console.log(`She will have to borrow ${Math.ceil(isThatOK)} leva.`)
    }




}

solve(['2', '3', '5', '1', '50']);
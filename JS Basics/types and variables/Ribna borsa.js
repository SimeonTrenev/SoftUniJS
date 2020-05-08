function solve(input){

    let cenaSkumria = Number(input.shift()); // za kilogram
    let cenaCaca = Number(input.shift()); // za kilogram
    let quantityPalamud = Number(input.shift());
    let quantitySafrid = Number(input.shift());
    let quantityMidi = Number(input.shift());

    let cenaPalamud = cenaSkumria * (1 + 0.6);
    let cenaSafrid = cenaCaca * (1 + 0.8);
    let cenaMidi = 7.50;

    let priceAll = (quantityPalamud * cenaPalamud) + (quantitySafrid * cenaSafrid) + (quantityMidi * cenaMidi);
    console.log(priceAll.toFixed(2));
    





}

solve(["6.90", "4.20", "1.5", "2.5", "1"]);
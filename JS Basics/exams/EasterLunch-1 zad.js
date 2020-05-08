function solve(input){
    
    let numberOfKozunaci = +input.shift();
    let numberKoriOfEggs = +input.shift();
    let kilosOfKurabii = +input.shift();

    let priceOfKozunak = 3.20;
    let priceOfEggs = 4.35;             /// za kora ot 12 qica
    let priceOfKurabii = 5.40;
    let priceOfColourForEggs = 0.15   /// za 1 qice

    let allForKozunaks = numberOfKozunaci * priceOfKozunak;
    let colouralleggsFinish = priceOfColourForEggs * 12 * numberKoriOfEggs;
    let allForEggs = numberKoriOfEggs * priceOfEggs;
    let allForKurabii = kilosOfKurabii * priceOfKurabii
    let all = allForKozunaks + colouralleggsFinish + allForEggs + allForKurabii
    console.log(all.toFixed(2))
}
solve(['3', '2', '3']);
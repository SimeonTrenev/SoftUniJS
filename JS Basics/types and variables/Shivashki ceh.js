function shivashkiCeh(input){

    let brPravMasi = Number(input.shift());
    let duljPravMasi = Number(input.shift());
    let shirocPravMasi = Number(input.shift());

    let coverUSD = 7; // za  1 br
    let pladUSD = 9; // za 1 br
    let usdKumbgn = 1.85;


    let ploshtPokrivka = brPravMasi * (duljPravMasi + 2 * 0.30) * (shirocPravMasi + 2 * 0.30);
   
    let ploshtKareta = brPravMasi * (duljPravMasi / 2) * (duljPravMasi / 2);
 
    let priceUSD = (ploshtPokrivka * coverUSD) + (ploshtKareta * pladUSD);
    let priceBGN = priceUSD * usdKumbgn;
    


    console.log(`${priceUSD.toFixed(2)} USD`);
    console.log(`${priceBGN.toFixed(2)} BGN`);






}

shivashkiCeh(["5",
"1.00",
"0.50",
]);
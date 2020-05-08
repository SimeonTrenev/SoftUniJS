function solve(input){

    let numberOfKozunaci = +input.shift();
    let paketSugar = 950;
    let paketBrashno = 750;
    let allSugar = 0;
    let allBrashno = 0;
    let maxGramsSugar = Number.MIN_SAFE_INTEGER;
    let maxGramsBrashno = Number.MIN_SAFE_INTEGER

    for(let i = 0; i < numberOfKozunaci; i++){
        let sugarGrams = +input.shift();
        let brashnoGrams = +input.shift();
        maxGramsBrashno = Math.max(maxGramsBrashno,brashnoGrams)
        maxGramsSugar = Math.max(maxGramsSugar, sugarGrams)
        allSugar += sugarGrams;
        allBrashno += brashnoGrams;

    }
        let numberSugar = Math.ceil(allSugar / paketSugar)
        let numberBrashno = Math.ceil(allBrashno / paketBrashno)

        console.log(`Sugar: ${numberSugar}`);
        console.log(`Flour: ${numberBrashno}`);
        console.log(`Max used flour is ${maxGramsBrashno} grams, max used sugar is ${maxGramsSugar} grams.`)
        
}
solve(['3',   '400',
'350', '250',
'300', '450',
'380', ''])
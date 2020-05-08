function solve(input){

    let nameOfTournament = input.shift();
    let wins = 0;
    let losts = 0;
    let counterForAllMatches = 0
    while(nameOfTournament !== 'End of tournaments'){
        let numberOfMatches = +input.shift();
        let counterForMatchesInEveryTournament = 1
        for(let i = 1; i <= numberOfMatches;i++){
            let pointForDessi = +input.shift();
            let pointForOther = +input.shift();
            if(pointForDessi > pointForOther){
                console.log(`Game ${counterForMatchesInEveryTournament} of tournament ${nameOfTournament}: win with ${pointForDessi - pointForOther} points.`)
                wins++;
                counterForAllMatches++;
            }else{
                console.log(`Game ${counterForMatchesInEveryTournament} of tournament ${nameOfTournament}: lost with ${pointForOther - pointForDessi} points.`)
                losts++;
                counterForAllMatches++;
            }
            
            counterForMatchesInEveryTournament++;
        }
        nameOfTournament = input.shift()
    }
    let resultWins = (wins / counterForAllMatches) * 100
    let resultLosts = (losts / counterForAllMatches) * 100
    console.log(`${resultWins.toFixed(2)}% matches win`)
    console.log(`${resultLosts.toFixed(2)}% matches lost`)
}
solve(['Dunkers',            '2',
'75',                 '65',
'56',                 '73',
'Fire Girls',         '3',
'67',                 '34',
'83',                 '98',
'66',                 '45',
'End of tournaments', ''])
function solve(input){

    let holidays = Number(input.shift());
    let normTom = 30000;    // norma za igra na Tom za godina
    let workTimePlay = 63; // minuti igra na den v rabotni dni
    let restTimePlat = 127; //minuti igra na den v pochivni dni
    let yearWorkingDays = (365 - holidays); // rabotni dni v godinata

    let allMinutesPlay = (restTimePlat * holidays) + (yearWorkingDays * workTimePlay);
    let ifTomSleepWell = normTom - allMinutesPlay;
    
    let hoursForRest = Math.floor(Math.abs(ifTomSleepWell / 60));
    let minutesForRest = Math.abs(ifTomSleepWell % 60);
    
    if(allMinutesPlay > normTom){
        console.log('Tom will run away');
        console.log(`${hoursForRest} hours and ${minutesForRest} minutes more for play`);
    }else if(allMinutesPlay < normTom){
        console.log('Tom sleeps well');
        console.log(`${hoursForRest} hours and ${minutesForRest} minutes less for play`);
    }
        
    

    




}

solve(['113']);
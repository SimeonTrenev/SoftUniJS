function solve(input){

    let typeOfYear = input.shift();
    let numberOfHolidays = +input.shift();
    let numberOfWeekends = +input.shift();
    let weekends = 48;

    let weekendsInSofia = (weekends - numberOfWeekends) * 3/4;
    let holidaysInSofia = numberOfHolidays * 2/3;
    let voleyballAllNormalYear = weekendsInSofia + holidaysInSofia + numberOfWeekends;
    let voleyballInLeapYear = voleyballAllNormalYear * 1.15;

    if(typeOfYear === 'leap'){
        console.log(Math.floor(voleyballInLeapYear));
    }else{
        console.log(Math.floor(voleyballAllNormalYear));
    }
    


}
solve(['normal', '11', '6']);
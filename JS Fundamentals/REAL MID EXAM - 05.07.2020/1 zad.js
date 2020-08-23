function solve(input){

    let array = input.slice();
    let firstEmployer = Number(array.shift())
    let secondEmployer = Number(array.shift())
    let thirdEmployer = Number(array.shift())
    let studentsCount = Number(array.shift())
    let allEmployers = firstEmployer + secondEmployer + thirdEmployer
    let hours = 0;
    if(studentsCount > 0){
        hours = 1;
    }

    for(let i = allEmployers; i < studentsCount;i+=allEmployers){
        hours++;
        if(hours % 4 === 0){
            hours++;
        }
    }
    console.log(`Time needed: ${hours}h.`)


}
solve([ '3', '2', '5', '40' ])
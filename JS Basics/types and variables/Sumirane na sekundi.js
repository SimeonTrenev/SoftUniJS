function solve(input){

    let firstTime = Number(input.shift());
    let secondTime = Number(input.shift());
    let thirdTime = Number(input.shift());

    let timeAll = firstTime + secondTime + thirdTime;
    
    let minutes = Math.floor(timeAll / 60);
    let seconds = timeAll % 60;

    if(seconds < 10){
        console.log(`${minutes}:0${seconds}`);
    } else {
        console.log(`${minutes}:${seconds}`)
    }
    
    




}

solve(["35", "45", "44"]);
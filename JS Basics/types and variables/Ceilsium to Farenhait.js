function solve(input){

    let celsium = Number(input.shift());

    let farenhait = (celsium * 1.8) + 32;

    console.log(farenhait.toFixed(2));


}

solve(["25"]);
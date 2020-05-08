function solve(input){

    let r = Number(input.shift());

    let areaOfCircle = Math.PI * Math.pow(r,2);
    let perameter = 2 * Math.PI * r;

    console.log(areaOfCircle.toFixed(2));
    console.log(perameter.toFixed(2));





}

solve(["3"]);
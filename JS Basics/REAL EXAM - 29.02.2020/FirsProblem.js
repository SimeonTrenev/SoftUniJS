function solve(input){

    let scumriaPrice = +input.shift(); // za kilogram
    let cacaPrice = +input.shift(); // za kilogram
    let neededKilosPalamud = +input.shift();
    let neededKilosSafrid = +input.shift();
    let neededKilosMidi = +input.shift();
    let midiPrice = 7.50;
    let palamudPrice = scumriaPrice * 1.6;
    let safridPrice = cacaPrice * 1.8;

    let result = palamudPrice * neededKilosPalamud + safridPrice * neededKilosSafrid + midiPrice * neededKilosMidi;
    console.log(result.toFixed(2))




}
solve(['6.90', '4.20', '1.5', '2.5', '1']);
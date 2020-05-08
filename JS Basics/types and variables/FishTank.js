function solve(input){

    let length = Number(input.shift());
    let width = Number(input.shift());
    let height = Number(input.shift());
    let percent = Number(input.shift());
    

    let volumeAquarium = length * width * height;
    let smToLitres = volumeAquarium / 1000;
    let newPercent = percent * 0.01;
    let finalVolume = smToLitres * (1 - newPercent);
    console.log(finalVolume.toFixed(3));
    

}



solve(["85",
"75",
"47",
"17"
]);
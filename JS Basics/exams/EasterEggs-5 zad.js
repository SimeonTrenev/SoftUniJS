function solve(input){

    let numberOfColouredEggs = +input.shift();
    let red = 0;
    let orange = 0;
    let blue = 0;
    let green = 0;

    for(let i = 0; i < numberOfColouredEggs;i++){
        let colours = input.shift();
        if(colours === 'red'){
            red += 1;
        }else if(colours === 'orange'){
            orange += 1;
        }else if(colours === 'blue'){
            blue += 1;
        }else{
            green += 1;
        }
    }
    let maxEggs = Math.max(red,orange,blue,green);
   
        console.log(`Red eggs: ${red}`);
        console.log(`Orange eggs: ${orange}`);
        console.log(`Blue eggs: ${blue}`);
        console.log(`Green eggs: ${green}`);
        if(red >= orange && red >= blue && red >= green){
            console.log(`Max eggs: ${maxEggs} -> red`);
        }else if(orange >= red && orange >= blue && orange >= green){
            console.log(`Max eggs: ${maxEggs} -> orange`);
        }else if(blue >= red && blue >= orange && blue >= green){
            console.log(`Max eggs: ${maxEggs} -> blue`);
        }else{
            console.log(`Max eggs: ${maxEggs} -> green`);
        }
        
        
}
solve(['7',     'orange',
'blue',  'green',
'green', 'blue',
'red',   'green',
''])
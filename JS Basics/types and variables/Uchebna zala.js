function solve(input){

    let w = Number(input.shift());
    let h = Number(input.shift());
    
    let w1 = w * 100;
    let h1 = h * 100;

    let koridor = 100;
    let rabotnoMqstoDuljina = 120;
    let rabotnoMqstoShirochina = 70;
    let ogranichneniRabotniMesta = 3;

    let shirochinaNaZalata = h1 - koridor;
    let broiRabotniMestaShirochina =parseInt(shirochinaNaZalata / rabotnoMqstoShirochina);
    
    let broiRabotniMestaDulzhina =parseInt(w1 / rabotnoMqstoDuljina);
    let broiMesta = broiRabotniMestaShirochina * broiRabotniMestaDulzhina - ogranichneniRabotniMesta;
    console.log(broiMesta)

    
    
   


}

solve(["15", "8.9"]);
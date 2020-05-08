function pyramid(base, increment){
//baza i namalqva s 2 na vseki etaj
//nai vutreshniteqt sloi e sustaven ot kamuk - 2 ot etaja * sushtoto
//nai vunshniq sloi e sustaven ot mramor, osven na 5,10,15... etaj, togava e sustaven ot lapis lazuli
//posledniq etaj e samo ot zlato
//kamuk, mramor, lapis lazuli, zlato
let totalStone = 0;
let totalMarble = 0;
let totalLapis = 0;
let row = 0;
let currentSize = base
while(currentSize > 2){
    let marble = currentSize * 4 - 4;
    let stone = currentSize * currentSize - marble;
    totalStone += stone
    row++;
    if(row % 5 === 0){
        totalLapis += marble
    }else{
        totalMarble += marble
    }
    currentSize -= 2
}
row++;
let totalGold = currentSize === 1 ? 1 : 4;

totalStone = Math.ceil(totalStone * increment);
totalMarble = Math.ceil(totalMarble * increment);
totalLapis = Math.ceil(totalLapis * increment);
totalGold = Math.ceil(totalGold * increment);
let piramidHeight = Math.floor(row * increment);

console.log(`Stone required: ${totalStone}`)
console.log(`Marble required: ${totalMarble}`)
console.log(`Lapis Lazuli required: ${totalLapis}`)
console.log(`Gold required: ${totalGold}`)
console.log(`Final pyramid height: ${piramidHeight}`) 
}
pyramid(11, 1)
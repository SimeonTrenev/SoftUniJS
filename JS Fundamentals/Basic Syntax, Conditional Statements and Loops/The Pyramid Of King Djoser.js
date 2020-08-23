function pyramid(base, increment){

    let totalStone = 0;
    let totalMarble = 0;
    let totalLapis = 0;
    let totalGold = 0
    let row = 0
    let currentSize = base
    
    while( currentSize > 2){
        let marble = currentSize * 4 - 4;
        let stone = currentSize * currentSize - marble;
        totalStone += stone;
        row++;
        if(row % 5 === 0){
            totalLapis += marble
        }else{
            totalMarble += marble
        }
        currentSize -= 2   
    }
    row++;
    if(currentSize === 1){
        totalGold = 1
    }else{
        totalGold = 4
    }
    // let totalGold = currentSize === 1 ? 1 : 4;

    totalStone = Math.ceil(totalStone * increment);
    totalMarble = Math.ceil(totalMarble * increment);
    totalLapis = Math.ceil(totalLapis * increment);
    totalGold = Math.ceil(totalGold * increment);
    let pyramidHeight = Math.floor(row * increment)

    

    console.log(`Stone required: ${totalStone}`)
    console.log(`Marble required: ${totalMarble}`)
    console.log(`Lapis Lazuli required: ${totalLapis}`)
    console.log(`Gold required: ${totalGold}`)
    console.log(`Final pyramid height: ${pyramidHeight}`)
    
}
pyramid(11, 1)
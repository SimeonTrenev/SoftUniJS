function giftBox(arr){

    let array = arr.slice();

    let sideSize = Number(array.shift());
    let sheetOfPaper = Number(array.shift());
    let coveredAreaPerSheet = Number(array.shift());

    let area = sideSize * sideSize * 6
    let freeCoveredArea = 0;
    for(let i = 1; i <= sheetOfPaper;i++){
        if(i % 3 === 0){
            freeCoveredArea += coveredAreaPerSheet * 0.25
        }else{
            freeCoveredArea += coveredAreaPerSheet
        }
    }
    let percentage = (freeCoveredArea / area) * 100;

    console.log(`You can cover ${percentage.toFixed(2)}% of the box.`)


}
giftBox([ '2.5', '32', '4.25' ])
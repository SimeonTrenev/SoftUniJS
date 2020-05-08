function sumFirsdAndLastElement(number){

    let firstElementText = number[0];
    let lastElementText = number[number.length - 1];
    let firstElement = Number(firstElementText);
    let lastElement = Number(lastElementText);
    let result = firstElement + lastElement
    console.log(result)
}
sumFirsdAndLastElement(['20', '30', '40'])
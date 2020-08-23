function sumFirstAndLast(array){

    let sum = 0;
    let firstElement = array.shift();
    let lastElement = array.pop();
    sum = Number(firstElement) + Number(lastElement)

    console.log(sum)
}
sumFirstAndLast(['5', '10', '20'])
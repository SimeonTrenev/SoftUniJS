function lastStop(arr){

    let array = arr.slice();
    let numbersOfPaintings = array.shift().split(' ').map(Number);
    
    for(let elements of array){
        let currentCommands = elements.split(' ')
        let command = currentCommands[0];
        let paintingNumber = Number(currentCommands[1])

        if(command === 'Change'){
            let changedNumber = Number(currentCommands[2])

            if(numbersOfPaintings.includes(paintingNumber)){
                let index = numbersOfPaintings.indexOf(paintingNumber)
                numbersOfPaintings[index] = changedNumber
            }
        }else if(command === 'Hide'){
            if(numbersOfPaintings.includes(paintingNumber)){
                let index = numbersOfPaintings.indexOf(paintingNumber)
                numbersOfPaintings.splice(index,1)
            }
        }else if(command === 'Switch'){
            let changedNumber = Number(currentCommands[2])
            if(numbersOfPaintings.includes(paintingNumber) && numbersOfPaintings.includes(changedNumber)){
                let indexOfFirstPainting = numbersOfPaintings.indexOf(paintingNumber)
                let indexOfSecondPainting = numbersOfPaintings.indexOf(changedNumber)
                numbersOfPaintings[indexOfFirstPainting] = changedNumber;
                numbersOfPaintings[indexOfSecondPainting] = paintingNumber
            }
        }else if(command === 'Insert'){
            let changedNumber = Number(currentCommands[2])
            if(numbersOfPaintings.includes(numbersOfPaintings[paintingNumber + 1])){
                numbersOfPaintings.splice(paintingNumber + 1,0,changedNumber)
            }
        }else if(command === 'Reverse'){
            numbersOfPaintings.reverse();
        }else if(command === 'END'){
            console.log(numbersOfPaintings.join(' '))
            break;
        }
    }


}
lastStop([
    '77 120 115 101 101 97 78 88 112 111 108 101 111 110',
    'Insert 5 32',
    'Switch 97 78',
    'Hide 88',
    'Change 120 117',
    'END'
  ])
function numberArray(arr){

    let array = arr.slice();

    let numberArray = array.shift().split(' ').map(Number);
    
    for(let elements of array){
        let currentComands = elements.split(' ');
        let comand = currentComands[0];
        let index = currentComands[1];

        if(comand === 'Switch'){
            index = Number(index);
            if(numberArray.includes(numberArray[index])){
                 if(numberArray[index] > 0){
                     numberArray[index] = -numberArray[index]
                 }else if(numberArray[index] < 0){
                     numberArray[index] = numberArray[index] * -1
                 }
            }
        }else if(comand === 'Change'){
            index = Number(index);
            let value = Number(currentComands[2])
            if(numberArray.includes(numberArray[index])){
                numberArray[index] = value;
            }
        }else if(comand === 'Sum' && index === 'Negative'){
            let sum = 0;
            for(let i = 0; i < numberArray.length;i++){
                if(numberArray[i] < 0){
                    sum += numberArray[i]
                }
            }
            console.log(sum)
        }else if(comand === 'Sum' && index === 'Positive'){
            let sum = 0;
            for(let i = 0;i < numberArray.length;i++){
                if(numberArray[i] > 0){
                    sum += numberArray[i]
                }
            }
            console.log(sum)
        }else if(comand === 'Sum' && index === 'All'){
            let sum = 0;
            for(let i = 0; i < numberArray.length;i++){
                sum += numberArray[i]
            }
            console.log(sum)
        }else if(comand === 'End'){
            let result = '';
            for(let i = 0; i < numberArray.length;i++){
                if(numberArray[i] >= 0){
                    result += `${numberArray[i]} `
                }
            }
            console.log(result)
        }
    }
   

}
numberArray([ '1 2 3 4 5', 'Switch 4', 'Change 0 -3', 'Sum Negative', 'End' ])
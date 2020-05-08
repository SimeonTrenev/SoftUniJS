function train(array = []){

    let wagons = array.shift().split(' ').map((element) => Number(element));
    let limitOfWagon = Number(array.shift());
    
    for(let i = 0; i < array.length;i++){
        let comand = array[i].split(' ')
        if(comand.length === 2){
            wagons.push(+comand[1])
        }else if(comand.length === 1){
           let passingersToAdd = Number(comand[0])
            for(let j = 0;j < array.length;j++){
                if(passingersToAdd + wagons[j] <= limitOfWagon){
                    wagons[j] += passingersToAdd
                    break;
                }
            }
        }

    }
        return wagons.join(' ')
}
console.log(train(['32 54 21 12 4 0 23',
'75',
'Add 10',
'Add 0',
'30',
'10',
'75']
))
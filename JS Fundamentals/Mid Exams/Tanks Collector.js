function tanksCollector(arr){

    let array = arr.slice();
    let tomTanks = array.shift().split(', ')
    let numberOfComands = Number(array.shift())
    let counterForComands = 0;
    
    if(numberOfComands > 0){
    for(let elements of array){
        counterForComands++;
        let allComands = elements.split(', ')
        let comand = allComands[0]
        let tankName = allComands[1]
        
        if(comand === 'Add'){
            if(!tomTanks.includes(tankName)){
                console.log(`Tank successfully bought`)
                tomTanks.push(tankName)
            }else{
                console.log(`Tank is already bought`)
            }
        }else if(comand === 'Remove'){
            if(tomTanks.includes(tankName)){
                console.log(`Tank successfully sold`)
                let index = tomTanks.indexOf(tankName)
                tomTanks.splice(index,1)
            }else{
                console.log(`Tank not found`)
            }
        }else if(comand === 'Remove At'){
            tankName = Number(tankName);
            if(tomTanks.includes(tomTanks[tankName])){
                console.log(`Tank successfully sold`)
                tomTanks.splice(tankName,1)
            }else{
                console.log(`Index out of range`)
            }
        }else if(comand === 'Insert'){
            tankName = Number(tankName)
            let nameOfTank = allComands[2]
            if(tomTanks.includes(tomTanks[tankName])){
                if(tomTanks.includes(nameOfTank)){
                    console.log(`Tank is already bought`)
                }else{
                    tomTanks.splice(tankName,0,nameOfTank)
                    console.log(`Tank successfully bought`)
                }
            }else{
                console.log(`Index out of range`)
            }
        }

        if(counterForComands === numberOfComands){
            console.log(tomTanks.join(', '))
            break;
        }
    }
    }else{
        console.log(tomTanks.join(', '))
    }

}
tanksCollector([
    'T 34, T 34 B, T92, AMX 13 57',
    '4',
    'Add, T 34',
    'Remove, AMX CDC',
    'Insert, 10, M60',
    'Remove At, 1'
  ])
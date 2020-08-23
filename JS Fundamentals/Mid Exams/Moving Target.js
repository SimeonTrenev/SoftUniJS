function movingTarget (input){
 
    let array = input.slice();
    let targets = array.shift().split(' ').map(Number);

    for(let elements of array){
        let [command,index] = elements.split(' ')
        index = Number(index);

        if(command === 'Shoot'){
            let power = Number(elements.split(' ')[2])
            if(targets.includes(targets[index])){
                targets[index] -= power;
                if(targets[index] <= 0){
                    targets.splice(index,1)
                }
            }
        }else if(command === 'Add'){
            let value = Number(elements.split(' ')[2])
            if(targets.includes(targets[index])){
                targets.splice(index,0,value)
            }else{
                console.log(`Invalid placement!`)
            }
        }else if(command === 'Strike'){
            let radius = Number(elements.split(' ')[2])
            if(targets.includes(targets[index])){
                if(targets.includes(targets[index - radius]) && targets.includes(targets[index + radius])){
                    if(radius === 0){
                        console.log(`Strike missed!`)
                    }
                    let startIndex = index - radius ;
    
                    targets.splice(index,radius + 1)
                    targets.splice(startIndex,radius)
                }else{
                    console.log(`Strike missed!`)
                }
            }else{
                console.log(`Strike missed!`)
            }
        }else if(command === 'End'){
            console.log(targets.join('|'))
            break;
        }
    }
    

}
movingTarget([
    '52 74 23 44 96 110',
    'Shoot 5 10',
    'Shoot 1 80',
    'Strike 2 1',
    'Add 22 3',
    'End'
  ])
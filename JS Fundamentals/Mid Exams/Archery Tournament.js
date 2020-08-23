function archeryTournament (input){
 
    let array = input.slice();

    let targets = array.shift().split('|').map(Number);
    let points = 0;
    let index = 0;

    for(let elements of array){
        let currentCommands = elements.split('@')
        let command = currentCommands[0]
        let startIndex = Number(currentCommands[1])
        let length = Number(currentCommands[2])
        

        if(command === 'Shoot Left'){
            
            index = 0
            index = startIndex + length
            if(targets.includes(targets[index])){
                if(targets[index] >= 5){
                    targets[index] -= 5;
                    points += 5
                }else{
                    points += targets[index]
                    targets[index] = 0
                }
            }
            if(index > targets.length - 1){
                index = targets.length - 1
            }
        
        }else if(command === 'Shoot Right'){
            index = targets.length - 1
            index = startIndex - length
            if(targets.includes(targets[index])){
                if(targets[index] >= 5){
                    targets[index] -= 5
                    points += 5
                }else{
                    points += targets[index]
                    targets[index] = 0;
                }
            }
            if(index < 0){
                index = targets.length - 1
            }

        }else if(command === 'Reverse'){
            targets.reverse()
        }else if(command === 'Game over'){
            console.log(targets.join(' - '))
            console.log(`Iskren finished the archery tournament with ${points} points!`)
            break;
        }
    }


    

}
archeryTournament([
    '10|10|10|10|10',
    'Shoot Left@0@2',
    'Shoot Right@4@5',
    'Shoot Right@6@5',
    'Reverse',
    'Game over',
    ''
  ])

//   archeryTournament = (input) => {
//     let points = 0;
//     let targets = input.shift().split('|').map(Number);
//     while((line = input.shift()) !== 'Game over') {
//         if(line === 'Reverse') {
//             targets.reverse();
//         } else {
//             let [ direction, index, length ] = line.split(' ')[1].split('@');
//             index = Number(index);
//             length = Number(length);
//             if(targets[index] === undefined) {
//                 continue;
//             }
 
//             while(length-- > 0) {
//                 index = index + (direction === 'Left' ? -1 : 1);
//                 if(index === -1) {
//                     index = targets.length - 1;
//                 } else if (index === targets.length) {
//                     index = 0;
//                 }
//             }
 
//             points += targets[index] >= 5 ? 5 : targets[index];
//             targets[index] = (value = targets[index] - 5) >= 0 ? value : 0;
//         }
//     }
 
//     console.log(targets.join(' - '));
//     console.log(`Iskren finished the archery tournament with ${points} points!`);
// }

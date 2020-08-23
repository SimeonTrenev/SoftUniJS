function tasksPlanner(arr){

    let array = arr.slice();
    let timeForTasks = array.shift().split(' ').map(Number);
    
    for(let elements of array){
        let currentComands = elements.split(' ');
        let comand = currentComands[0];
        let index = Number(currentComands[1])

        if(comand === 'Complete'){
            if(timeForTasks.includes(timeForTasks[index])){
                timeForTasks[index] = 0;
            }
        }else if(comand === 'Change'){
            let time = Number(currentComands[2])
            if(timeForTasks.includes(timeForTasks[index])){
                timeForTasks[index] = time;
            }
        }else if(comand === 'Drop'){
            if(timeForTasks.includes(timeForTasks[index])){
                timeForTasks[index] = -1;
            }
        }else if(comand === 'Count' && currentComands[1] === 'Completed'){
            let completedTasks = 0;
            for(let el of timeForTasks){
                if(el === 0){
                    completedTasks++;
                }
            }
            console.log(completedTasks)
        }else if(comand === 'Count' && currentComands[1] === 'Incomplete'){
            let incompleteTasks = 0;
            for(let el of timeForTasks){
                if(el > 0){
                    incompleteTasks++;
                }
            }
            console.log(incompleteTasks)
        }else if(comand === 'Count' && currentComands[1] === 'Dropped'){
            let droppedTasks = 0;
            for(let el of timeForTasks){
                if(el < 0){
                    droppedTasks++;
                }
            }
            console.log(droppedTasks);
        }else if(comand === 'End'){
            let finalIncompletedTasks = '';
            for(let el of timeForTasks){
                if(el > 0){
                    finalIncompletedTasks += `${el } `
                }
            }
            console.log(finalIncompletedTasks)
            break;
        }
        
    }
    
}
tasksPlanner([
    '1 2 3 4 5 4 0 3 2 1',
    'Complete 0',
    'Complete 1',
    'Complete 2',
    'Drop 3',
    'Change 4 1',
    'Count Completed',
    'End'
  ])
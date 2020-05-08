function hightJump(input){

    let goals = +input.shift();
    let started = goals - 30;
    let numberOfJumps = 0;

    while(goals >= started){
        let jump = +input.shift();
        let numberOfBadJumps = 0
        for(let i = 1 ;i <= 3;i ++){
            numberOfJumps++
            if(jump > started){
                started += 5
                break;
            }else{
                numberOfBadJumps++;
                jump = +input.shift();
            }
        }
        if(numberOfBadJumps >= 3){
            console.log(`Tihomir failed at ${started}cm after ${numberOfJumps} jumps.`)
            break;
        }
    }
    if(started > goals){
        console.log(`Tihomir succeeded, he jumped over ${goals}cm after ${numberOfJumps} jumps.`)
    }
    
}
hightJump(['250', '225', '224',
'225', '228', '231',
'235', '234', '235',
''])
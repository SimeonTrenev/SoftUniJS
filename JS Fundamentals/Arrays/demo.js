function ad(array){

    let startedHealth = 100
    let coins = 0;
    let splitted = array[0].split('|')
    let roomCounter = 0;
    let isQuestionOver = true;
    let currentHealth = 100
    for(let el of splitted){
        roomCounter++;
        let firstSign = el.split(' ')[0]
        let secondSign = Number(el.split(' ')[1])
        
        if(firstSign === 'potion'){
            
            if(currentHealth + secondSign> 100){
                console.log(`You healed for ${startedHealth - currentHealth} hp.`)
                currentHealth = startedHealth
            }else{
                console.log(`You healed for ${secondSign} hp.`)
                currentHealth += secondSign
            }
            
           
            console.log(`Current health: ${currentHealth} hp.`)
        }else if(firstSign === 'chest'){
            coins += secondSign
            console.log(`You found ${secondSign} coins.`)
        }else{
            currentHealth -= secondSign
            if(currentHealth > 0){
                console.log(`You slayed ${firstSign}.`)
            }else{
                console.log(`You died! Killed by ${firstSign}.`)
                console.log(`Best room: ${roomCounter}`)
                isQuestionOver = false;
                break;
            }
        }
    }
    if(isQuestionOver){
        console.log(`You've made it!`)
        console.log(`Coins: ${coins}`)
        console.log(`Health: ${currentHealth}`)
    }


}
ad([ 'cat 10|potion 30|orc 10|chest 10|snake 25|chest 110' ])
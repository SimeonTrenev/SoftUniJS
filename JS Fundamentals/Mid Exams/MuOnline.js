function muOnline(arr){

    let startingHealth = 100;
    let currentHealth = startingHealth;
    let bitcoins = 0;
    let dungeon = arr[0].split('|')
    let isOver = false;
    let bestRoom = 0;

   for(let i = 0; i < dungeon.length;i++){
       let comand = dungeon[i].split(' ')[0]
       let number = Number(dungeon[i].split(' ')[1])
       bestRoom++;
       
       if(comand === 'potion'){
           if(currentHealth + number > 100){
               console.log(`You healed for ${startingHealth - currentHealth} hp.`)
               currentHealth = 100
           }else{
               currentHealth += number
               console.log(`You healed for ${number} hp.`)
           }
           console.log(`Current health: ${currentHealth} hp.`)
       }else if(comand === 'chest'){
            bitcoins += number
            console.log(`You found ${number} bitcoins.`)
       }else{
           currentHealth -= number
           if(currentHealth > 0){
            console.log(`You slayed ${comand}.`)
           }else{
               console.log(`You died! Killed by ${comand}.`)
               isOver = true;
               console.log(`Best room: ${bestRoom}`)
               break;
           }
       }

   }
   if(!isOver){
       console.log(`You've made it!`)
       console.log(`Bitcoins: ${bitcoins}`)
       console.log(`Health: ${currentHealth}`)
   }


}
muOnline([ 'cat 10|potion 30|orc 10|chest 10|snake 25|chest 110' ])
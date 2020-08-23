function tsiamAccount(input = []){

    let games = input[0].split(' ');
 
    for(let i = 1; i < input.length;i++){
         let currentElement = input[i].split(' ')
         let comand = currentElement[0]
         let newGame = currentElement[1]
 
         if(comand === 'Play'){
             break;
         }else if(comand === 'Install'){
             let counter = 0;
 
             for(let i = 0;i < games.length;i++){
                 if(games[i] === newGame){
                     counter++;
                     break;
                 }
             }
             if(counter === 0){
                 games.push(newGame)
             }
         }else if(comand === 'Unistal'){
             for(let i = 0; i < games.length;i++){
                 if(games[i] === newGame){
                     games.splice(i,1);
                     break;
                 }
             }
         }else if(comand === 'Update'){
             for(let i = 0;i < games.length;i++){
                 if(games[i] === newGame){
                     games.splice(i,1)
                     games.push(newGame)
                 }
             }
         }else if(comand === 'Expansion'){
             let expansion = newGame.split('-')
             let game = expansion[0];
             for(let i = 0; i < games.length;i++){
                 if(games[i] === game){
                     let expandedGame = expansion.join(':')
                     games.splice(i + 1,0,expandedGame)
                     break;
                 }
             }
         }
 
    }
 
         console.log(games.join(' '))
 
 }
 tsiamAccount([
    'CS WoW Diablo',
    'Install LoL',
    'Uninstall WoW',
    'Update Diablo',
    'Expansion CS-Go',
    'Play!'
  ])
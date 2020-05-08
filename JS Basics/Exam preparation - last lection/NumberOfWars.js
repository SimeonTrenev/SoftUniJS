function solve(input){

    let namePlayer1 = input.shift();
    let namePlayer2 = input.shift();
    let comand = ''
    let pointsPlayer1 = 0;
    let pointsPlayer2 = 0;
    let numberWars = false;
    let isEnd = false;
    let cardNumber1 = input.shift();
    let cardNumber2 = input.shift();
    while(comand !== 'End of game'){
        cardNumber1 = Number(cardNumber1);
        cardNumber2 = Number(cardNumber2)
        if(cardNumber1 > cardNumber2){
            pointsPlayer1 += cardNumber1 - cardNumber2
        }else if(cardNumber2 > cardNumber1){
            pointsPlayer2 += cardNumber2 - cardNumber1
        }else if(cardNumber1 === cardNumber2){
            cardNumber1 = +input.shift();
            cardNumber2 = +input.shift();
            numberWars = true;
            if(cardNumber1 > cardNumber2){
                console.log('Number wars!')
                console.log(`${namePlayer1} is winner with ${pointsPlayer1} points`);
                break;
            }else if(cardNumber2 > cardNumber1){
                console.log('Number wars!')
                console.log(`${namePlayer2} is winner with ${pointsPlayer2} points`);
                break;
            }
        }
         cardNumber1 = input.shift();
         if(cardNumber1 === 'End of game'){
             isEnd = true;
             break;
         }
         cardNumber2 = input.shift();
         if(cardNumber2 === 'End of game'){
            isEnd = true;
            break;
        }
    }
    if(isEnd){
        console.log(`${namePlayer1} has ${pointsPlayer1} points`)
        console.log(`${namePlayer2} has ${pointsPlayer2} points`)
    }

}
solve(['Elena', 'Simeon', '6', '3', '2', '5', '8', '9', 'End of game', ''])
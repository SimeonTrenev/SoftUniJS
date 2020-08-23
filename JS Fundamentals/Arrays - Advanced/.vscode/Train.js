function train(array){

    let startingWagons = array.shift().split(' ').map(Number);
    let maxCapacityOfWagon = Number(array.shift())

    for(let i = 0; i < array.length;i++){
        let comand = array[i].split(' ')
        if(comand.length === 2){
            add(Number(comand[1]));
        }else if(comand.length === 1){
          let passangersToAdd = Number(comand[0]);
          for(let i = 0; i < startingWagons.length;i++){
              if(startingWagons[i] + passangersToAdd <= maxCapacityOfWagon){
                  startingWagons[i] += passangersToAdd;
                  break;
              }
          }
            
        }
        
    }
    console.log(startingWagons.join(' '))
    function add(number){
      return  startingWagons.push(number);
    }
  
}
train(['32 54 21 12 4 0 23',
'75',
'Add 10',
'Add 0',
'30',
'10',
'75']
)

// for(let j = 0;j < array.length;j++){
//     if(passingersToAdd + wagons[j] <= limitOfWagon){
//         wagons[j] += passingersToAdd
//         break;
//     }
// }
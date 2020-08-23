function ladyBugs(array){

   let field = [];
   let fieldSize = array[0];
   for(let i = 0; i < fieldSize;i++){
       if(array[1].split(' ').includes(i.toString())){
           field[i] = 1;
       }else{
           field[i] = 0;
       }
       
   }
   for(let index = 2;index < array.length;index++){
       let action = array[index].split(' ');
       let ladyBugIndex = Number(action[0]);
       let direction = action[1];
       let flyLength = Number(action[2]);
       let hasLanded = false;
       if(field[ladyBugIndex] === 1){
           field[ladyBugIndex] = 0;
           while(!hasLanded){
               if(direction === 'right'){
                   ladyBugIndex += flyLength;
               }else if(direction === 'left'){
                   ladyBugIndex -= flyLength;
               }
               if(field[ladyBugIndex] === 1){
                   continue;
               }else if(field[ladyBugIndex] === 0){
                   field[ladyBugIndex] = 1;
                   hasLanded = true;
               }else{
                   hasLanded = true;
               }
           }
       }
   }
    
   console.log(field.join(' '))

}
ladyBugs([ 5, '3',
'3 left 2',
'1 left -2']


)
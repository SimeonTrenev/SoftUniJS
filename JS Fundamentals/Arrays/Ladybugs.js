function ladyBugs(arr){

    let sizeOfField = arr[0]
    
    let ladyBugsPositions = arr[1]
    .split(' ')
    .map(Number);
  
    let ladyBugsArray = [];
 
    for(let i = 0 ;i < sizeOfField;i++){
        ladyBugsArray.push(0)
    }
 
    for(let i = 0; i < sizeOfField;i++){
        let ladyBugsIndex = ladyBugsPositions[i]
        if(ladyBugsIndex >= 0 && ladyBugsIndex <= sizeOfField){
            ladyBugsArray[ladyBugsIndex] = 1
        }
    }
 
    for(let i = 2; i < arr.length;i++){
        let [ladyBugsIndex, command, jumpLenght] = arr[i].split(' ');
        ladyBugsIndex = +ladyBugsIndex;
        jumpLenght = +jumpLenght;
 
        if(ladyBugsArray[ladyBugsIndex] !== 1 || ladyBugsIndex < 0 || ladyBugsIndex >= ladyBugsArray.length){
            continue
        }
 
        if(jumpLenght < 0){
            jumpLenght = Math.abs(jumpLenght);
            if(command === 'right'){
                command = 'left';
            }else if(command === 'left'){
                command = 'right'
            }
        }
 
        ladyBugsArray[ladyBugsIndex] = 0;
        if(command === 'right'){
            let newPosion = ladyBugsIndex + jumpLenght;
 
            if(ladyBugsArray[newPosion] === 1){
                newPosion = newPosion + jumpLenght
            }
 
            if(newPosion <= ladyBugsArray.length){
                ladyBugsArray[newPosion] = 1
            }
        }else{
            let newPosion = ladyBugsIndex - jumpLenght;
 
            if(ladyBugsArray[newPosion] === 1){
                newPosion = newPosion - jumpLenght;
            }
 
            if(newPosion >= 0){
                ladyBugsArray[newPosion] = 1
            }
        }
    }
 
 
    console.log(ladyBugsArray.join(' '))
 }
 ladyBugs([ 3, '0 1',
 '0 right 1',
 '2 right 1' ]
 )
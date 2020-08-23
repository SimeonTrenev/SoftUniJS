function arrayManipulations(array){

    let manipulatedArray = array.shift().split(' ').map(Number);
    
    for(let i = 0; i < array.length;i++){
        let[comand, firstNum, secondNum] = array[i].split(' ');
       

        firstNum = Number(firstNum);
        secondNum = Number(secondNum);

        if(comand === 'Add'){
           add(firstNum)
        }else if(comand === 'Remove'){
            remove(firstNum)
        }else if(comand === 'RemoveAt'){
           removeAt(firstNum)
        }else if(comand === 'Insert'){
            insert(firstNum,secondNum)
        }
    }

    console.log(manipulatedArray.join(' '))


    function add(element){
     return   manipulatedArray.push(element);
    }

    function remove(element){
        manipulatedArray = manipulatedArray.filter(x => x != element)
        return manipulatedArray;
    }

    function removeAt(index){
      return  manipulatedArray.splice(index,1);
    }

    function insert(number, index){
        return manipulatedArray.splice(index,0,number);
    }

}
arrayManipulations(['4 19 2 53 6 43',
'Add 3',
'Remove 2',
'RemoveAt 1',
'Insert 8 3']
)
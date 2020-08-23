function buildAWall(arr){

    let array = arr.slice().map(Number)
    let manipulatedArray = [];
    let isOver = false;
    let pesosPerCubicYard = 1900;
    let cubicYardPerCrewPerDay = 195;

    while(!isOver){
        isOver = true;
        let currentWorkingCrewsCount = 0;

        for(let i = 0; i < array.length;i++){
            if(array[i] < 30){
                array[i]++;
                isOver = false;
                currentWorkingCrewsCount++;
            }
        }

        if(currentWorkingCrewsCount > 0){
            manipulatedArray.push(currentWorkingCrewsCount * cubicYardPerCrewPerDay);
        }
    }
  
    console.log(manipulatedArray.join(', '))
    console.log(`${manipulatedArray.reduce((a,b) => a + b) * pesosPerCubicYard} pesos`);


}
buildAWall([21, 25, 28])
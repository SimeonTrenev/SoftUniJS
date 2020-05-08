function maxSequence(arr = []){
    
    // arr = arr[0].split(' ');
    let longestSequence = [];
    let leftMostIndex = 0;

    for(let i = 0; i < arr.length;i++){
        let currentElement = arr[i];
        let currentSequence = [currentElement];
        for(let j = i + 1;j < arr.length;j++){
            let nextElement = arr[j]
            if(nextElement === currentElement){
                currentSequence.push(nextElement)
            }else{
                break;
            }
        }
        if(currentSequence.length > longestSequence.length){
            longestSequence = []
            for(let j = 0;j < currentSequence.length;j++){
                longestSequence.push(currentSequence[j])
            }
        }else if(currentSequence.length === longestSequence.length){
            if(i < leftMostIndex){
                leftMostIndex = i;
            }
        }
    }
    console.log(longestSequence.join(' '))

}
maxSequence([2, 1, 1, 2, 3, 3, 2, 2, 2, 1])
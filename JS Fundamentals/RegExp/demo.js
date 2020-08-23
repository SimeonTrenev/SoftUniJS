function help(arr){


    let racers = arr.shift().split(', ');
    let object = {};
    
    for(let line of arr){
        let nameMatch = line.match(/[A-Za-z]/g)
        let name = nameMatch.join('');
        let matchingForPoints = line.match(/[\d]/g)
        let points = adding(matchingForPoints)

        if(racers.includes(name)){
        if(!object[name]){
            object[name] = 0
        }
        object[name] += points
    }
    }
    
    let ranking = Object.keys(object)
                .sort((a,b) => object[b] - object[a])
                .slice(0,3);
    
    for(let index in ranking){
        if(index === '0'){
            console.log(`1st place: ${ranking[index]}`)
        }else if(index === '1'){
            console.log(`2nd place: ${ranking[index]}`)
        }else if(index === '2'){
            console.log(`3rd place: ${ranking[index]}`)
        }
    }
    
    function adding(array){
        let sum = 0;
        if(array !== null){
        for(let i = 0; i < array.length;i++){
            sum += Number(array[i])
        }
    }
        return sum;
    }

}
help([
    'George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race'
  ])
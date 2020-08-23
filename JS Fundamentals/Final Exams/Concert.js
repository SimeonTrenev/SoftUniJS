function concert(array){

    let object = {};

    for(let elements of array){
        let currentCommands = elements.split('; ')
        let command = currentCommands[0];
        let bandName = currentCommands[1];
        
        if(command === 'Add'){
            let bandMember = currentCommands.slice(2)
            let uniqueNames = new Set()
            
            for(let i = 0 ; i < bandMember.length;i++){
                let currentNames = bandMember[i].split(', ')
                for(let j = 0 ; j < currentNames.length;j++){
                    let currentName = currentNames[j]
                    uniqueNames.add(currentName)
                    if(!object.hasOwnProperty(bandName)){
                    object[bandName] = {uniqueNames, time : 0}
                    }else{
                        if(object[bandName].uniqueNames !== undefined){
                        object[bandName].uniqueNames.add(currentName)
                        }else{
                            object[bandName].uniqueNames = uniqueNames
                        }
                }
                }
            }
    }else if(command === 'Play'){
        let time = Number(currentCommands[2])
        if(object.hasOwnProperty(bandName)){
            object[bandName].time += time
        }else{
            object[bandName] = {time}
        }
    }else if(command === 'start of concert'){
        let sorted = Object.entries(object).sort((a,b) => b[1].time - a[1].time || a[0].localeCompare(b[0]))
        let totalTime = 0;
        for(let time of sorted){
            totalTime += time[1].time
        }
        console.log(`Total time: ${totalTime}`)

        for(let bands of sorted){
            console.log(`${bands[0]} -> ${bands[1].time}`)
        }
    }else{
        let nameOfBand = command;
        let iterated = Object.entries(object)
        for(let people of iterated){
            if(people[0] === nameOfBand){
                console.log(people[0])
                let searchedBand = Array.from(people[1].uniqueNames)
                for(let band of searchedBand){
                    console.log(`=> ${band}`)
                }
            }
        }
    }
    }
   
}
concert([
    'Add; The Beatles; John Lennon, Paul McCartney',
    'Add; The Beatles; Paul McCartney, George Harrison',
    'Add; The Beatles; George Harrison, Ringo Starr',
    'Play; The Beatles; 3698',
    'Play; The Beatles; 3828',
    'start of concert',
    'The Beatles'
  ])

//   function solve(input) {
 
//     let finalBand = input.pop();
//     input.pop();
//     let concert = {};
//     let totalTime = 0;
 
//     //fill the object and calculate totalTime
//     input.forEach((line) => {
//         let [command, band, other] = line.split('; ');
 
//         if (command === 'Play') {
//             let time = +other;
//             if (!concert.hasOwnProperty(band)) {
//                 concert[band] = {};
//                 concert[band]['time'] = 0;
//                 concert[band]['members'] = [];
//             }
//             let currentTime = +concert[band]['time'];
//             concert[band]['time'] = currentTime + time;
//             totalTime += time;
//         } else {
//             let members = other.split(', ');
//             if (!concert.hasOwnProperty(band)) {
//                 concert[band] = {};
//                 concert[band]['time'] = 0;
//                 concert[band]['members'] = [];
//             }
//             let oldMembers = concert[band]['members'];
//             let newMembers = [...oldMembers,...members];
//             let set = new Set(newMembers);
//             concert[band]['members'] = Array.from(set);
 
//         }
//     });
 
 
//     console.log(`Total time: ${totalTime}`);
 
 
//     let concertArr = Object.entries(concert);
//     let sorted = concertArr.sort((a, b) => {
//         return b[1]['time'] - a[1]['time'] || a[0].localeCompare(b[0]);
//     });
 
//     sorted.forEach((line) => {
//         console.log(`${line[0]} -> ${line[1]['time']}`);
//     });
 
//     console.log(finalBand);
 
//     let final = concert[finalBand]['members'];
//     final.forEach((line) => {
//         console.log(`=> ${line}`);
//     })
// }
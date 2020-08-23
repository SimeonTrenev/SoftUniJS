function makeADictionary(array){

    let dictionary = {};
  
    for(let i = 0; i < array.length;i++){
        let el = JSON.parse(array[i])
        let entry = Object.entries(el)[0]
        dictionary[entry[0]] = entry[1]
    }
    
    let sortedDictionary = {};

    for(let key of Object.keys(dictionary).sort((a,b) => a.localeCompare(b))){
        sortedDictionary[key] = dictionary[key]
    }
   
    for(let term in sortedDictionary){
        if(sortedDictionary.hasOwnProperty(term)){
            const definition = sortedDictionary[term];
            console.log(`Term: ${term} => Definition: ${definition}`)
        }
    }


}
makeADictionary([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
    ]
    )
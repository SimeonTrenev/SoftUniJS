function neigborhoods(array){

    let neigbourbours = array.shift().split(', ')
    let mappedNeigbourhoods = {};
    
   

    for(let name of neigbourbours){
        mappedNeigbourhoods[name] = []
    }

    for(let line of array){
    let [neigbours,person] = line.split(' - ')
        if(mappedNeigbourhoods[neigbours]){
            mappedNeigbourhoods[neigbours].push(person)
        }

    }
    
    let iterated = Object.entries(mappedNeigbourhoods).sort((a,b) => {
        let lengthOfObjectA = a[1].length;
        let lengthOfObjectB = b[1].length;

        return lengthOfObjectB - lengthOfObjectA;
    })
    
    for(let kvp of iterated){
        console.log(`${kvp[0]}: ${kvp[1].length}`)
        for(let person of kvp[1]){
            console.log(`--${person}`)
        }
    }
}
neigborhoods(['Abbey Street, Herald Street, Bright Mews',
'Bright Mews - Garry',
'Bright Mews - Andrea',
'Invalid Street - Tommy',
'Abbey Street - Billy']
)
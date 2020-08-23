function wordTracker(array){
    
    
    let object = getWantedWords(array);
    
    for(let word of array.slice(1)){
        if(Object.keys(object).includes(word)){
            object[word]++;
        }
    }
    
    let iterated = Object.entries(object).sort((a,b) => {
        let countForA = a[1]
        let countForB = b[1]
        
        return countForB - countForA;
    })

    for(let elements of iterated){
        console.log(`${elements[0]} - ${elements[1]}`)
    }


    function getWantedWords(arr){
        let object = {}
        arr[0].split(' ').forEach(word => {
            object[word] = 0
        })
        return object;
    }
}
wordTracker([
    'this sentence', 'In','this','sentence','you','have','to','count','the','occurances','of','the'
    ,'words','this','and','sentence','because','this','is','your','task'
    ]
    )
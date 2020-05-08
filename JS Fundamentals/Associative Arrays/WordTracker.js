function tracker(array = []){

    let tracker = {}
    array.slice(0,1)[0].split(' ').forEach(element => tracker[element] = 0);
    array.slice(1).forEach(element => {
        if(tracker.hasOwnProperty(element)){
            tracker[element] += 1
        }
    })
    Object.keys(tracker)
    .sort((a,b)=> tracker[b] - tracker[a])
    .forEach((keys)=>
    console.log(`${keys} - ${tracker[keys]}`))
    
}
tracker([
    'this sentence', 'In','this','sentence','you','have','to','count','the','occurances','of','the'
    ,'words','this','and','sentence','because','this','is','your','task'
    ]
    )
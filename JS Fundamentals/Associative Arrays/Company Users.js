function companyUsers(array){

    let obj = {}

    for(let elements of array){
        let [company,employer] = elements.split(' -> ')
        
        if(!obj.hasOwnProperty(company)){
            obj[company] = new Set();
        }

        obj[company].add(employer)
    }
    
    let iterated = Object.entries(obj).sort((a,b) => a[0].localeCompare(b[0]))
    
    for(let keys of iterated){
        console.log(keys[0])
        for(let element of Array.from(keys[1].entries())){
            console.log(`-- ${element[0]}`)
        }
    }
}
companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
    ]
    )
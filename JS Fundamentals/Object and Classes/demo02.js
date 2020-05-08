function solve(input){



    for(let key of input){
        let names = key.split(' | ')
        let town = names[0]
        let latitude = Number(names[1]).toFixed(2)
        let longitude = Number(names[2]).toFixed(2)
        
        let object = {
            town: town,
            latitude: latitude,
            longitude: longitude
        }
        console.log(object)
        
    }



}
solve(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']
)
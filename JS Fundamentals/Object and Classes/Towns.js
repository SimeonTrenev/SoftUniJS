function towns(array){

    

    for(let elements of array){
        let[town,latitude,longitude] = elements.split(' | ')
        latitude = Number(latitude)
        longitude = Number(longitude)
        let object = {
            town : town,
            latitude : latitude.toFixed(2),
            longitude : longitude.toFixed(2)
        }
        console.log(object)
    }
   



}
towns(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']
)
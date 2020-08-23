function convertToObject(object){

    let obj = JSON.parse(object)
    for(let key in obj){
        console.log(`${key}: ${obj[key]}`)
    }

}
convertToObject('{"name": "George", "age": 40, "town": "Sofia"}')
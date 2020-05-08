function convert(information){

    let info = JSON.parse(information)

    for(let key in info){
        console.log(`${key}: ${info[key]}`)
    }

}
convert('{"name": "George", "age": 40, "town": "Sofia"}')
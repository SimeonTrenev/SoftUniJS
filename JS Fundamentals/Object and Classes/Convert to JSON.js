function convertToJSON(name, lastName, hairColor){

    let object = {
        name: name,
        lastName: lastName,
        hairColor: hairColor
    }

    let jsonFile = JSON.stringify(object)
    console.log(jsonFile)


}
convertToJSON('George',
'Jones',
'Brown'
)
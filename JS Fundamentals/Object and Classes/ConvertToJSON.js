function convert(name, lastName, hairColor){

    let people = { name : name, 
        lastName : lastName, 
        hairColor : hairColor };
    let contvetionFile = JSON.stringify(people)
    console.log(contvetionFile)

}
convert('George',
'Jones',
'Brown'
)
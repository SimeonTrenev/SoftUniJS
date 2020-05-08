function listOfProducts(array = []){

    let myNewArray = array.sort()
    for(let i = 0 ;i < myNewArray.length ;i++){
        console.log(`${i + 1}.${myNewArray[i]}`)
    }

}
listOfProducts(["Potatoes", "Tomatoes", "Onions", "Apples"])
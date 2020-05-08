function listed(array = []){

    let list = array.sort()
    for(let i = 0; i < array.length;i++){
        console.log(`${i + 1}.${list[i]} `)
    }

}
listed(["Potatoes", "Tomatoes", "Onions", "Apples"])
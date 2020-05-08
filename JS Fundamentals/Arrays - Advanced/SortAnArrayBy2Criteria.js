function sortAnArray(array = []){

    let lengthOfArray = array.sort((a,b)=> a.length - b.length || a.localeCompare(b))
    console.log(lengthOfArray.join('\n'))

}
sortAnArray(["Isacc", "Theodor", "Jack", "Harrison", "George"])
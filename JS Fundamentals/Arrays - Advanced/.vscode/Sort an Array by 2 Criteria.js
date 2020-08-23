function sortAnArrayBy(array){

    let sorted = array.slice().sort((a,b) => a.length - b.length || a.localeCompare(b))

    console.log(sorted.join('\n'))


}
sortAnArrayBy(["Isacc", "Theodor", "Jack", "Harrison", "George"])
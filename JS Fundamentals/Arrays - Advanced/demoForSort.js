let array = [1,2,3,4,5,6]

let myArray = array.sort((a,b) => b - a)
console.log(myArray)

let abs = ['one','two','three','four','five','six']
let sort = abs.sort((a,b)=> a.length - b.length || a.localeCompare(b))
console.log(sort)
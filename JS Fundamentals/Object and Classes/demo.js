
function makeCatSound(){
    console.log('Meow')
}


let dog = {
    name : "Charlie",
    age : 10,
    hair : 'black',
    eyes : 'blue',
    makeSound : makeCatSound
}

dog['mouth'] = 'one'

let keys = Object.keys(dog)
let values = Object.values(dog)
let entries = Object.entries(dog)

console.log(dog)
console.log(keys)
console.log(values)
console.log(entries)
dog.makeSound()
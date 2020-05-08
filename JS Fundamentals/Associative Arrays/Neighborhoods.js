function neighborhoods(input){


let neighborhoodName1 = input.shift().split(', ');
let neigbourhouds = new Map();

neighborhoodName1.forEach(name => neigbourhouds.set(name, []))

for(let line of input){
    let [neighborhoodNames, person] = line.split(' - ')
    if(neigbourhouds.has(neighborhoodNames)){
        neigbourhouds.get(neighborhoodNames).push(person)
    }
}

let temp = Array.from(neigbourhouds.entries());
temp.sort((a,b)=>{
  let aCount = a[1].length;
  let bCount = b[1].length
  return bCount - aCount;
})
let result = new Map(temp)

for(let [neigborhoodName, person] of result){
    console.log(`${neigborhoodName}: ${person.length}`)

    person.forEach(people => console.log(`--${people}`))
}


}
neighborhoods(['Abbey Street, Herald Street, Bright Mews',
'Bright Mews - Garry',
'Bright Mews - Andrea',
'Invalid Street - Tommy',
'Abbey Street - Billy']
)
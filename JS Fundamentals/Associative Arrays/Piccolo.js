function piccolo(array){

let cars = []

for(let elements of array){
    let [direction,carNumber] = elements.split(', ')
    
    if(direction === 'IN'){
        if(!cars.includes(carNumber)){
            cars.push(carNumber)
        }
    }else if(direction === 'OUT'){
        if(cars.includes(carNumber)){
            let indexOfCarNumber = cars.indexOf(carNumber)
            cars.splice(indexOfCarNumber,1)
        }
    }
}
    if(cars.length > 0){
    cars.sort((a,b) => {
      return  a.localeCompare(b) 
    })
    console.log(cars.join('\n'))
}else{
    console.log(`Parking Lot is Empty`)
}
}
piccolo(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU']
)
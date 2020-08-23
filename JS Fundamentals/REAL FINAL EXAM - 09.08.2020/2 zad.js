function solve(input){

    let pattern = /(?<firstSurround>[\=\/])(?<destination>[A-Z][A-Za-z]{2,})\1/g

    let sum = 0;
    
    let destination = ''
    let travelPoints = 0;
    let match = pattern.exec(input)
    while(match){
        let currentDestination = match.groups.destination
        travelPoints += Number(currentDestination.length)
        destination += `${currentDestination}, `
        match = pattern.exec(input)
    }
    if(destination.endsWith(', ')){
        let index = destination.lastIndexOf(',')
        destination = destination.substring(0,index)
    }
    console.log(`Destinations: ${destination}`)
    console.log(`Travel Points: ${travelPoints}`)
    

}
solve('=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=')
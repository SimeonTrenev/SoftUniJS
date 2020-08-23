function travelTime(array){

    let obj = {}

    for(let elements of array){
        let [country,town,cost] = elements.split(' > ')
        cost = Number(cost)

       if(!obj.hasOwnProperty(country)){
           obj[country] = []
       }
       
       let currentTown = obj[country].find(x => x.town === town)

       if(!currentTown){
           obj[country].push({town,cost: Number(cost)})
       }else if(Number(cost) < currentTown.cost){
           currentTown.cost = Number(cost)
       }   
    }

    let output = "";

    Object.keys(obj)
    .sort((a,b) => a.localeCompare(b))
    .forEach(country =>{
        output += `${country} -> `
        obj[country].sort((a,b) => a.cost - b.cost).forEach(x => {
            output += `${x.town} -> ${x.cost} `
        })
        output += '\n'
    })
    console.log(output)
    
}
travelTime([
    "Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200"
    ]
    )
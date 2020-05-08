function solve(input){

    let heroes = []
    let object = {}
    for(let key of input){
        let current = key.split(' / ')
        object = { name: current[0],
        levels: Number(current[1]),
        items: current[2]
        .split(', ')
        .sort((a,b)=>a.localeCompare(b))
        .join(', ')
        }
        heroes.push(object)
    }
    
    heroes.sort((a,b) => {
        return a.levels - b.levels
    })
    
    for(let hero of heroes){
        console.log(`Hero: ${hero.name}\nlevel => ${hero.levels}\nitems => ${hero.items}`)
    }

}
solve([
    "Isacc / 25 / Apple, GravityGun",
    "Derek / 12 / BarrelVest, DestructionSword",
    "Hes / 1 / Desolator, Sentinel, Antara"
    ]
    )
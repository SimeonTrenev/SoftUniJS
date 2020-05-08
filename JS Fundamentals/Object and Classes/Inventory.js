function inventory(array){
    let heroes = []
    while(array.length > 0){
        let line = array.shift().split(' / ')
        let hero = {name : line[0],
        level : Number(line[1]),
        items : line[2]
        .split(', ')
        .sort((a,b)=> a.localeCompare(b))
        .join(', ')
    }
    heroes.push(hero)
    
    }
    heroes.sort((hero1,hero2)=>{
        return hero1.level - hero2.level
    })
    
    let output = []

    for(let hero of heroes){
        let str = `Hero: ${hero.name}\nlevel => ${hero.level}\nitems => ${hero.items}`
        output.push(str)
    }
    console.log(output.join("\n"))

}
inventory([
    "Isacc / 25 / Apple, GravityGun",
    "Derek / 12 / BarrelVest, DestructionSword",
    "Hes / 1 / Desolator, Sentinel, Antara"
    ]
    )
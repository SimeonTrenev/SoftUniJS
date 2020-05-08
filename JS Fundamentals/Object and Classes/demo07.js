class Vehicle{
    constructor(type,model,parts,fuel){
        this.type = type
        this.model = model
        this.parts = parts
        this.parts.quality = parts.engine * parts.power
        this.fuel = fuel
    }
    drive(fuelLost){
        this.fuel -= fuelLost
    }
}

let object = {
    engine: 6,
    power: 10,
}

const result = new Vehicle('Opel', 'Vectra',object,100)
result.drive(30)
console.log(result)
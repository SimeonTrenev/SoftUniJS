  class Vehicle{
        constructor(type,model,parts,fuel,){
            this.type = type;
            this.model = model;
            this.parts = parts
            this.parts.quality = parts.engine * parts.power
            this.fuel = fuel;
        }

        drive(fuelLost){
            this.fuel -= fuelLost
        }
    }
    const opelVectraParts = {
        engine: 100,
        power: 6,
    };
    const myVehicle = new Vehicle('Opel','Vectra',opelVectraParts, 190)
    myVehicle.drive(40)
    console.log(myVehicle)


function city(name, area, population, country, postCode){

    let ourCity = {name: name, area: area, population: population, country: country, postCode: postCode}

    for(let key in ourCity){
        console.log(`${key} -> ${ourCity[key]}`)
    }


}
city("Sofia"," 492", "1238438", "Bulgaria", "1000")
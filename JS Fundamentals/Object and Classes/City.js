function city(name, area, population, country, postCode){

    let cityInfo = {name, area, population, country, postCode};

    for(let key in cityInfo){
        console.log(`${key} -> ${cityInfo[key]}`)
    }

}
city("Sofia"," 492", "1238438", "Bulgaria", "1000")
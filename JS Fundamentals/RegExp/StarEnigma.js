function solve(input){

    let obj = {
        attacked: [],
        destroyed: []
    }
    
    for(let line of input.slice(1)){

        const keyPattern = /[star]/gmi
        const key = line.match(keyPattern) ? line.match(keyPattern).length : 0;

        let message = line.split('').map((c)=> String.fromCharCode((c.charCodeAt(0)- key))).join('');
        
        let messagePattern = /@(?<planet>[A-Za-z]+)(?:[^:@\-!>]+)?:(?<population>[\d]+)(?:[^:@\-!>]+)?!(?<type>A|D)!(?:[^:@\-!>]+)?->(?<soldiers>[\d]+)/gm
        
        let matches = messagePattern.exec(message);

        if(matches){
            let{planet, population, type, soldiers} = matches.groups;

            if(type === 'A'){
                obj.attacked.push(planet)
            }else if(type === 'D'){
                obj.destroyed.push(planet)
            }

        }
        
    }

    const attackedLength = obj.attacked.length;
    const destroyedLength = obj.destroyed.length;

    console.log(`Attacked planets: ${attackedLength}`)
    if(attackedLength > 0){
        obj.attacked.sort((a,b)=>a.localeCompare(b))
        .forEach((planet)=>console.log(`-> ${planet}`))
    }
    console.log(`Destroyed planets: ${destroyedLength}`)
    if(destroyedLength > 0){
        obj.destroyed.sort((a,b)=>a.localeCompare(b))
        .forEach((planet)=>console.log(`-> ${planet}`))
    }
}
solve([ '2', 'STCDoghudd4=63333$D$0A53333', 'EHfsytsnhf?8555&I&2C9555SR' ])
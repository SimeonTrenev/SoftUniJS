function heroRecruitment(array){

    let object = {};

    for(let elements of array){
        let [command, heroName, spellName] = elements.split(' ')

        if(command === 'Enroll'){
            if(!object.hasOwnProperty(heroName)){
                object[heroName] = []
            }else{
                console.log(`${heroName} is already enrolled.`)
            }
        }else if(command === 'Learn'){
            if(object.hasOwnProperty(heroName)){
                if(!object[heroName].includes(spellName)){
                    object[heroName].push(spellName)
                }else{
                    console.log(`${heroName} has already learnt ${spellName}.`)
                }

            }else{
                console.log(`${heroName} doesn't exist.`)
            }
            
        }else if(command === 'Unlearn'){
            if(object.hasOwnProperty(heroName)){
                if(object[heroName].includes(spellName)){
                    let index = object[heroName].indexOf(spellName)
                    object[heroName].splice(index,1)
                }else{
                    console.log(`${heroName} doesn't know ${spellName}.`)
                }
            }else{
                console.log(`${heroName} doesn't exist.`)
            }
            
        }else if(command === 'End'){
            let iteratedHeroes = Object.entries(object).sort((a,b) => b[1].length - a[1].length || a[0].localeCompare(b[0]))
            
            console.log('Heroes:')
            for(let heroes of iteratedHeroes){
                if(heroes[1].length > 0){
                    if(heroes[1].length > 1){
                    let spells = ''
                    for(let i = 0; i < heroes[1].length;i++){
                        let currentSpell = heroes[1][i]
                        if(i === heroes[1].length - 1){
                            spells += `${currentSpell}`;
                        }else{
                            spells += `${currentSpell}, `;
                        }
                        
                    }
                    console.log(`== ${heroes[0]}: ${spells}`)
                }else{
                    let spells = ''
                    for(let spell of heroes[1]){
                        spells += `${spell}`;
                    }
                    console.log(`== ${heroes[0]}: ${spells}`)
                }
                }else{
                    console.log(`== ${heroes[0]}: `)
                }
            }
            break;
        }
        
    }

}
heroRecruitment([
    'Enroll Stefan',
    'Enroll Pesho',
    'Enroll Stefan',
    'Learn Stefan ItShouldWork',
    'Learn Stamat ItShouldNotWork',
    'Unlearn Gosho Dispel',
    'Unlearn Stefan ItShouldWork',
    'End'
  ])

//   function solve(input){

//     let objectForHeroes = {};

//     for(let elements of input){
//         let [command, heroName, spellName] = elements.split(' ')

//         if(command === 'Enroll'){
//             enroll(objectForHeroes,heroName)
//         }else if(command === 'Learn'){
//            learn(objectForHeroes,heroName,spellName)
//         }else if(command === 'Unlearn'){
//             unlearn(objectForHeroes,heroName,spellName)
//         }else if(command === 'End'){
//             let sorted = Object.entries(objectForHeroes).sort((a,b) => b[1].length - a[1].length || a[0].localeCompare(b[0]))
//             console.log(`Heroes:`)
//             for(let heroes of sorted){
//                 let magicBook = '';
//                 let spellsOfHeroes = heroes[1]
//                 for(let i = 0; i < spellsOfHeroes.length;i++){
//                     let currentSpell = spellsOfHeroes[i]
//                     if(i === spellsOfHeroes.length - 1){
//                         magicBook += `${currentSpell}`
//                     }else{
//                         magicBook += `${currentSpell}, `
//                     }
//                 }
//                 console.log(`== ${heroes[0]}: ${magicBook}`)
//             }
//         }
//     }

//     function enroll(objectForHeroes,heroName){
//         if(!objectForHeroes.hasOwnProperty(heroName)){
//             objectForHeroes[heroName] = []
//         }else{
//             console.log(`${heroName} is already enrolled.`)
//         }
//         return objectForHeroes
//     }

//     function learn(objectForHeroes,heroName,spellName){
//         if(objectForHeroes.hasOwnProperty(heroName)){
//             if(!objectForHeroes[heroName].includes(spellName)){
//                 objectForHeroes[heroName].push(spellName)
//             }else{
//                 console.log(`${heroName} has already learnt ${spellName}.`)
//             }

//         }else{
//             console.log(`${heroName} doesn't exist.`)
//         }
//         return objectForHeroes;
//     }

//     function unlearn(objectForHeroes,heroName,spellName){
//         if(objectForHeroes.hasOwnProperty(heroName)){
//             if(objectForHeroes[heroName].includes(spellName)){
//                 let index = objectForHeroes[heroName].indexOf(spellName);
//                 objectForHeroes[heroName].splice(index,1)
//             }else{
//                 console.log(`${heroName} doesn't know ${spellName}.`)
//             }
//         }else{
//             console.log(`${heroName} doesn't exist.`)
//         }
//         return objectForHeroes;
//     }

// }
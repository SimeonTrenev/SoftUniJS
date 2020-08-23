function bossRush(array){

    let numberOfChecks = Number(array.shift())

    let pattern = /\|[A-Z]{4,}\|:{1}#{1}[A-Za-z]{1,}[ ][A-Za-z]{1,}#{1}/g

    for(let i = 0; i < numberOfChecks;i++){
        let currentCheck = array[i];

        let match = currentCheck.match(pattern)
        if(match){
            let name = match[0].match(/[A-Z]{4,}/g)
            let realName = name[0]
            let title = match[0].match(/[A-Za-z]{1,}[ ][A-Za-z]{1,}/g)
            let realTitle = title[0]
            console.log(`${realName}, The ${realTitle}`)
            console.log(`>> Strength: ${realName.length}`)
            console.log(`>> Armour: ${realTitle.length}`)
            
        }else{
            console.log(`Access denied!`)
        }
    }


}
bossRush([
    '3',
    '|GEORGI|:#Lead architect#',
    '|Hristo|:#High Overseer#',
    '|STEFAN|:#Assistant Game Developer#'
  ])

//   function solve(input){


//     let numberOfChecks = Number(input.shift());
//     let pattern = /(\|)(?<bossName>[A-Z]{4,})\1:(\#)(?<title>[A-Za-z]+ [A-Za-z]+)\3/g
    
//     for(let i = 0; i < numberOfChecks;i++){
//         let currentText = input[i];
//         let match = pattern.exec(currentText)
    
//         if(match){
//             let bossName = match.groups.bossName;
//             let title = match.groups.title;
    
//             console.log(`${bossName}, The ${title}`)
//             console.log(`>> Strength: ${bossName.length}`)
//             console.log(`>> Armour: ${title.length}`)
//         }else{
//             console.log(`Access denied!`)
//         }
//     }
    
    
    
//     }
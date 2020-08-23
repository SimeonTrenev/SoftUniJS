function messageEncrypter(array){

    let numberOfChecks = Number(array.shift());
    let pattern = /([*@])(?<tag>[A-Z][a-z]{2,})\1: \[(?<first>[A-Za-z]+)\]\|\[(?<second>[A-Za-z]+)\]\|\[(?<third>[A-Za-z]+)\]\|$/g

    for(let i = 0; i < numberOfChecks;i++){
        let currentText = array[i]

        let match = pattern.exec(currentText)

        if(match){
            let firstChar = match.groups.first.charCodeAt(0);
            let secondChar = match.groups.second.charCodeAt(0);
            let thirdChar = match.groups.third.charCodeAt(0);
            let tag = match.groups.tag;

            

            console.log(`${tag}: ${firstChar} ${secondChar} ${thirdChar} `)
        }else{
            console.log(`Valid message not found!`)
        }
    }


}
messageEncrypter([
    '3',
    '*Request*: [I]|[s]|[i]|',
    '*Taggy@: [73]|[73]|[73]|',
    'Should be valid @Taggy@: [v]|[a]|[l]|'
  ])


//   function solve(input) {

//     let rgx = /([*@])([A-Z][a-z]{2,})\1: \[(\w)]\|\[(\w)]\|\[(\w)]\|$/;

//     input.shift();

//     input.forEach(el => {

//         let arr = el.match(rgx);

//         if (arr) {

//             let tag = arr[2];

//             let first = arr[3].charCodeAt();

//             let second = arr[4].charCodeAt();

//             let third = arr[5].charCodeAt();

//             console.log(`${tag}: ${first} ${second} ${third}`);

//         } else {

//             console.log('Valid message not found!');

//         }

//     });

// }
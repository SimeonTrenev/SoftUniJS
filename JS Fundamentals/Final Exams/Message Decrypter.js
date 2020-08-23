function messageDecrypter(array){

    let numberOfChecks = Number(array.shift());
    let pattern = /^([$%])(?<tag>[A-Z][a-z]{2,})\1[:][ ]\[(?<firstNum>[\d]+)\]\|\[(?<secondNum>[\d]+)\]\|\[(?<thirdNum>[\d]+)\]\|$/g
                
    for(let i = 0; i < numberOfChecks;i++){
        let currentText = array[i]
        let match = pattern.exec(currentText)

        if(match){
            let firstNum = match.groups.firstNum
            let secondNum = match.groups.secondNum
            let thirdNum = match.groups.thirdNum
            let message = String.fromCharCode(firstNum) + String.fromCharCode(secondNum) + String.fromCharCode(thirdNum)
            let tag = match.groups.tag
            
            console.log(`${tag}: ${message}`)
        }else{
            console.log(`Valid message not found!`)
        }
    }

}
messageDecrypter([
    '4',
    '$Request$: [73]|[115]|[105]|',
    '%Taggy$: [73]|[73]|[73]|',
    '%Taggy%: [118]|[97]|[108]|',
    '$Request$: [73]|[115]|[105]|[32]|[75]|'
  ])
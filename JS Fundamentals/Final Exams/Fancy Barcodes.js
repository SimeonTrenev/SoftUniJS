function fancyBarcodes(input){

    let countOfBarcodesForChecking = Number(input.shift())
    let pattern = /(?<capturingGroup>\@{1}\#{1,})(?<barcode>[A-Z][A-Za-z0-9]{4,}[A-Z])(?<capturingGroup2>\@{1}\#{1,})/g
    let digitPattern = /[\d]/g

    for(let i = 0; i < countOfBarcodesForChecking; i++){
        let currentBarcode = input[i];
        let match = currentBarcode.match(pattern)
        
        if(match){
            let concatedDigits = '';
            let groupsOfDigits = match[0].match(digitPattern)
            if(groupsOfDigits === null){
                console.log(`Product group: 00`)
            }else{
            for(let j = 0; j < groupsOfDigits.length;j++){
                let currentDigit = groupsOfDigits[j]
                concatedDigits += currentDigit
            }
            console.log(`Product group: ${concatedDigits}`)
        }
           
        }else{
            console.log(`Invalid barcode`)
        }
    }
 

}
fancyBarcodes([ '3', '@#FreshFisH@#', '@###Brea0D@###', '@##Che46sE@##' ])
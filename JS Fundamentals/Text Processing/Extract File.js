function extractFile(string){

    let lastIndexOfString = string.lastIndexOf('\\');
    let lastPartOfString = string.substring(lastIndexOfString + 1)
    let lastPointIndex = string.lastIndexOf('.')
    let finalPartOfSentance = string.substring(lastPointIndex + 1)
    let filePart = string.substring(lastIndexOfString + 1,lastPointIndex)
    console.log(`File name: ${filePart}`)
    console.log(`File extension: ${finalPartOfSentance}`)
    

}
extractFile('C:\\Internal\\training-internal\\Template.pptx')
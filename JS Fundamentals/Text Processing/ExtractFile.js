function solve(text){

    let separated = text.split('\\')
    let lastElement = separated[separated.length - 1]
    let sepp = lastElement.lastIndexOf('.')
    let firstElement = lastElement.substring(0,sepp)
    let llelelement = lastElement.substring(sepp + 1)
    console.log(`File name: ${firstElement}`)
    console.log(`File extension: ${llelelement}`)

}
solve('C:\\Internal\\training-internal\\Template.pptx')
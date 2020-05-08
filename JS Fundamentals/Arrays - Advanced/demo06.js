function smallNumber(array = []){

    let small = array.sort((a,b) => {
        return a - b
    })
    let pich = small.slice(0,2)
    console.log(pich.join(' '))

}
smallNumber([30, 15, 50, 5])
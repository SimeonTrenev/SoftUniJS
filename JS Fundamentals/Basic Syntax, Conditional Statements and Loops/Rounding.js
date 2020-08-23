function rounding(number, trailingZeroes){

    if(trailingZeroes > 15){
        trailingZeroes = 15
    }
    let result = parseFloat(number.toFixed(trailingZeroes))
    console.log(result)
}
rounding(3.1415926535897932384626433832795,2)
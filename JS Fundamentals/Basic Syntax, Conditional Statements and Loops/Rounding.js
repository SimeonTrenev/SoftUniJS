function rounding(n, trailingZeroes){
    if(trailingZeroes > 15){
        trailingZeroes = 15
    }
    let x = parseFloat(n.toFixed(trailingZeroes))
    console.log(x)
}
rounding(3.1443535353535353535353, 2)
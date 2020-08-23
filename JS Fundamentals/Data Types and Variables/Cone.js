function cone(radius, height){

    let S = Math.PI * Math.pow(radius,2)
    let volume = 1/3 * S * height
    let s = Math.sqrt(Math.pow(radius,2) + Math.pow(height,2))
    let areaB = Math.PI * radius * s
    let area = areaB + S

    console.log(`volume = ${volume.toFixed(4)}`)
    console.log(`area = ${area.toFixed(4)}`)

}
cone(3, 5)
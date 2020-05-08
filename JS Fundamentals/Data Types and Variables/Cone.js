function cone(radius, height){

    let volume = ((1/3)*Math.PI*Math.pow(radius,2)*height)
    let area = Math.sqrt(Math.pow(radius,2)+Math.pow(height,2))
    let newArea = Math.PI*radius*(radius+area)
    console.log(`volume = ${volume.toFixed(4)}`)
    console.log(`area = ${newArea.toFixed(4)}`)
}
cone(3, 5)
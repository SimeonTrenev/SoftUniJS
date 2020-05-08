function arrayRotation(givenArray, rotation){

    for(let i = 0; i < rotation;i++){
        let firstRotate = givenArray.shift()
        givenArray.push(firstRotate)
    }

    

   
    console.log(givenArray.join(' '))
}
arrayRotation([51, 47, 32, 61, 21], 2)
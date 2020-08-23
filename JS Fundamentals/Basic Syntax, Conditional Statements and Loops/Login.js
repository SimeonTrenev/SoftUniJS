function login(input){

    let user = input.shift()
    let password = user.split('').reverse().join('')
    let comand = input.shift()
    let counter = 1
    while(password !== comand){
        if(counter === 4){
            console.log(`User ${user} blocked!`)
            break;
        }
        console.log('Incorrect password. Try again.')
        comand = input.shift()
        counter++;
    }
    if(password === comand){
        console.log(`User ${user} logged in.`)
    }
    
    

}
login(['sunny','rainy','cloudy','sunny','not sunny'])
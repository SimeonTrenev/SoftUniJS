function registration (array){

    let numberOfRegistrations = Number(array.shift());
    let pattern = /U\$(?<username>[A-Z][a-z]{2,})U\$P\@\$(?<password>[A-Za-z]{5,}[0-9]+)P\@\$/g
    let countOfSuccessfulRegistration = 0;

    for(let i = 0; i < numberOfRegistrations;i++){
        let currentRegistration = array[i];
        let match = pattern.exec(currentRegistration)
        if(match){
            countOfSuccessfulRegistration++;
            console.log(`Registration was successful`)
            console.log(`Username: ${match.groups.username}, Password: ${match.groups.password}`)
        }else{
            console.log(`Invalid username or password`)
        }
    }
    console.log(`Successful registrations: ${countOfSuccessfulRegistration}`)
    

}
registration([
    '3',
    'U$MichaelU$P@$asdqwe123P@$',
    'U$NameU$P@$PasswordP@$',
    'U$UserU$P@$ad2P@$'
  ])
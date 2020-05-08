function replacePlaces(firstName, charing, lastName){

    let newName = firstName.replace('_', charing);
    newName === lastName ? console.log('Matched') : console.log('Not Matched');
}
replacePlaces('Str_ng', 'I', 'Strong')
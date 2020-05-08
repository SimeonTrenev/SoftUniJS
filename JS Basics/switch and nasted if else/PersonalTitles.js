function solve(input){

    let age = +input.shift();
    let gender = input.shift();

    switch(gender){
        case 'm':
        if(age < 16){
            console.log('Master');
        }else{
                console.log('Mr.');
        }
        break;
        case 'f':
            if(age < 16){
                console.log('Miss')
            }else{
                console.log('Ms.')
            }

        break;
    }



}
solve(['13.5', 'm'])
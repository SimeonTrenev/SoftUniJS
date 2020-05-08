function orders(product, quantity){

    let sum = 0;
    switch(product){
        case 'coffee':
        sum = quantity * 1.50;
        break;
        case 'water':
        sum = quantity * 1;
        break;
        case 'coke':
        sum = quantity * 1.40;
        break;
        case 'snacks':
        sum = quantity * 2
        break;
    }
    return sum.toFixed(2);
}
let result = orders('water', 5)
console.log(result)
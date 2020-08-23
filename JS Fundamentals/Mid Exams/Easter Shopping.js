function easterShopping(arr){

    let array = arr.slice();
    let shoppList = array.shift().split(' ')
    let numberOfComands = Number(array.shift());
    let count = 0;

    
    for(let elements of array){
        count++;
        let currentComands = elements.split(' ');
        let comand = currentComands[0];
        let shop = currentComands[1];

        if(comand === 'Include'){
            shoppList.push(shop)
        }else if(comand === 'Visit' && shop === 'first'){
            let numberOfShops = Number(currentComands[2]);
            if(numberOfShops <= shoppList.length){
                shoppList.splice(0,numberOfShops)
            }
        }else if(comand === 'Visit' && shop === 'last'){
            let numberOfShops = Number(currentComands[2]);
            if(numberOfShops <= shoppList.length){
                shoppList.splice(shoppList.length - 1 - numberOfShops + 1,numberOfShops)
            }
        }else if(comand === 'Prefer'){
            let indexOfFirstShop = Number(currentComands[1])
            let indexOfSecondShop = Number(currentComands[2])

            if(shoppList.includes(shoppList[indexOfFirstShop]) && shoppList.includes(shoppList[indexOfSecondShop])){
                let firstShopValue = shoppList[indexOfFirstShop]
                shoppList[indexOfFirstShop] = shoppList[indexOfSecondShop]
                shoppList[indexOfSecondShop] = firstShopValue
            }
        }else if(comand === 'Place'){
            let shopIndex = Number(currentComands[2]);
            if(shoppList.includes(shoppList[shopIndex + 1])){
                shoppList.splice(shopIndex + 1,0,shop)
            }
        }

        if(count === numberOfComands){
            console.log('Shops left:')
            console.log(shoppList.join(' '))
            break;
        }
    }



}
easterShopping([
    'Boutique Flowers CandyStore ThriftShop Versace Groceries ToyStore PeakStore',
    '6',
    'Visit first 9',
    'Visit last 4',
    'Prefer 3 8',
    'Prefer 0 1',
    'Place Store 7',
    'Place ShoeAquarium 2'
  ])
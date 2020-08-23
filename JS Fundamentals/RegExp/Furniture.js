function furniture(array){

    let pattern = />>(?<furniture>[A-Za-z]+)<<(?<price>[.\d]+)!(?<quantity>\d{1,})\b/g
    let totalSum = 0;
    let myArray = []
    let match = pattern.exec(array);

    while(match !== null){
        let furniture = match.groups['furniture']
        let price = match.groups['price']
        let quantity = match.groups['quantity']
        totalSum += price * quantity
        myArray.push(furniture)
        
        match = pattern.exec(array)
    }
    console.log(`Bought furniture:`)
    for(let elements of myArray){
        console.log(elements)
    }
    console.log(`Total money spend: ${totalSum.toFixed(2)}`)


}
furniture([ '>>Sofa<<312.23!3', '>>TV<<300!5', '>Invalid<<!5', 'Purchase' ])
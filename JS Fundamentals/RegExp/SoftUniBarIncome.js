function solve(input){

    let totalIncome = 0;

    for(let line of input){
        const pattern = /%(?<customer>[A-Z][a-z]+)%(?:[^%\.\|\$]+)?<(?<product>[\w]+)>(?:[^%\.\|\$]+)?\|(?<quantity>[\d]+)\|(?:[^%\.\|\$\d]+)?(?<price>[\d]+\.?[\d]+)\$/g

        let match = pattern.exec(line)

        if(match){

            let {customer, product, quantity, price} = match.groups;
            let purchaseValue = (+price) * (+quantity)
            console.log(`${customer}: ${product} - ${purchaseValue.toFixed(2)}`)

            totalIncome += purchaseValue
        }
    }

    console.log(`Total income: ${totalIncome.toFixed(2)}`)


}
solve([
    '%George%<Croissant>|2|10.3$',
    '%Peter%<Gum>|1|1.3$',
    '%Maria%<Cola>|1|2.4$',
    'end of shift'
  ])
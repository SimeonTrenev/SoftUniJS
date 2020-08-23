function softUniBarIncome(array){

    let totalIncome = 0;

   for(let elements of array){
    let pattern = /%(?<customer>[A-Z][a-z]+)%(?:[^%\.\|\$]+)?<(?<product>[\w]+)>(?:[^%\.\|\$]+)?\|(?<quantity>[\d]+)\|(?:[^%\.\|\$\d]+)?(?<price>[\d]+\.?[\d]+)\$/g
    let match = pattern.exec(elements)
    if(match){
    let totalPriceForEachPeople = Number(match.groups.quantity) * Number(match.groups.price);
    console.log(`${match.groups.customer}: ${match.groups.product} - ${totalPriceForEachPeople.toFixed(2)}`)
    totalIncome += totalPriceForEachPeople
    }
   }
   console.log(`Total income: ${totalIncome.toFixed(2)}`)


}
softUniBarIncome([
  '%George%<Croissant>|2|10.3$',
  '%Peter%<Gum>|1|1.3$',
  '%Maria%<Cola>|1|2.4$',
  'end of shift'
])
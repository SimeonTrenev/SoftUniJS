function solve(input){


let totalSum = 0
console.log(`Bought furniture: `)
for(const line of input){
    const pattern = />>(?<name>.+)<<(?<money>[\d]+\.?[\d]+)!(?<number>[\d]+)/g
    const matches = pattern.exec(line)
    if(matches){
        const{name, money, number} = matches.groups;
        console.log(name)
        totalSum += (+money) * (+number)
    }
    
}
console.log(`Total money spend: ${totalSum.toFixed(2)}`)
}
solve(['>>Sofa<<312.23!3',
    '>>TV<<300!5',
    '>Invalid<<!5',
    'Purchase'
])